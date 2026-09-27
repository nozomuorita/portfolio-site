# ポートフォリオサイト運用手順書

最終更新日: 2026-09-27

## 1. 目的

本書は、日常的なコンテンツ更新、公開確認、AWSインフラ変更、監視、障害対応、定期保守を安全に行うための手順を定義します。

## 2. 運用の原則

1. ソースコードとCDKコードを正とし、公開先だけを直接変更しない。
2. アプリ変更とインフラ変更を分け、小さい単位で実施する。
3. ローカル確認、差分確認、公開、公開後確認の順を守る。
4. AWS調査は`codex-readonly`、明示的に許可された変更だけ`codex-admin`を使用する。
5. 秘密情報をソース、文書、スクリーンショット、Issueへ記載しない。
6. 作業後は結果と次に行うことを記録する。

## 3. 日常のコンテンツ更新

### 3.1 主な編集先

| 更新内容 | 主なファイル・場所 |
| --- | --- |
| ヘッダー・BGM | `src/components/Header.jsx` |
| Hero | `src/components/HomePage.jsx`、`src/assets/hero/` |
| プロフィール・経歴・研究 | `src/components/section/About.jsx`、`src/assets/about/`、`src/assets/profile/` |
| 制作物 | `src/components/section/Portfolio.jsx`、`src/assets/portfolio/` |
| 資格 | `src/components/section/Qualification.jsx`、`src/assets/qualifications/` |
| 技術 | `src/components/section/skill.jsx`、`src/assets/skills/` |
| Contact | `src/components/section/Contact.jsx`、`src/assets/contact/` |
| Footer | `src/components/section/Footer.jsx` |
| デザイン | `src/App.css`、`src/index.css` |

### 3.2 アセット追加ルール

- 用途別ディレクトリへ配置する。
- 英小文字・数字・ハイフンで意味の分かる名前を付ける。
- 元データをそのまま置かず、Web表示に必要な解像度と容量へ調整する。
- 写真はJPEG/WebP、透過が必要な画像はPNG/WebP、図や単色ロゴはSVGを優先する。
- 権利者がいるロゴ・バッジは公開利用条件を確認する。
- 追加後に`npm run build`の出力サイズを確認する。

## 4. ローカル開発

### 4.1 初回または依存変更後

```powershell
cd C:\Users\nzmor\Documents\portfolio-site
npm ci
npm run dev
```

ターミナルに表示されたローカルURLを開きます。

### 4.2 公開前確認

```powershell
npm run lint
npm run build
$LASTEXITCODE
npm run preview
```

`npm run preview`は通常`http://localhost:4173`で`dist/`を表示します。開発サーバーではなく、本番成果物の確認に使います。

### 4.3 Git差分

```powershell
git status --short
git diff
```

意図しないファイル、大容量ファイル、秘密情報、生成物が含まれていないことを確認します。

## 5. アプリケーションの公開

### 5.1 通常フロー

1. ローカルでlint・build・表示確認を行う。
2. 変更内容ごとにcommitする。
3. Pull Requestを使う場合はCI成功後に`main`へmergeする。
4. `main`へのpushでPagesとAWSのWorkflowが自動起動する。
5. GitHub Actionsで両方の結果を確認する。
6. GitHub Pages URLとCloudFront URLの表示を確認する。

### 5.2 手動実行

GitHubのActions画面で対象Workflowを選び、`Run workflow`から`main`を指定します。ソース変更がない再デプロイ、外部サービスの一時障害からの再実行に利用できます。

### 5.3 AWSだけ手動同期する場合

通常はGitHub Actionsを使用します。障害調査などで手動同期が必要な場合は、先にdry-runを行います。

```powershell
aws sso login --profile codex-admin
npm run build
aws s3 sync .\dist s3://portfoliositestack-sitebucket397a1860-zjcfwm36ko0g `
  --dryrun `
  --profile codex-admin `
  --region ap-northeast-1
```

内容を確認した後だけ`--dryrun`を外します。その後、CloudFront Invalidationが必要です。通常運用では手動方式を常用しません。

## 6. AWSインフラ変更

### 6.1 認証

```powershell
aws sso login --profile codex-admin
aws sts get-caller-identity --profile codex-admin --no-cli-pager
```

AccountとARNを確認し、意図した環境であることを確かめます。

### 6.2 標準手順

```powershell
cd C:\Users\nzmor\Documents\portfolio-site\infra

npm run build
$LASTEXITCODE

npm run synth
$LASTEXITCODE

.\node_modules\.bin\cdk.cmd diff PortfolioSiteStack `
  --profile codex-admin `
  --no-change-set

.\node_modules\.bin\cdk.cmd deploy PortfolioSiteStack `
  --profile codex-admin
```

### 6.3 各工程の判定

| 工程 | 確認点 |
| --- | --- |
| `build` | TypeScript検査がエラーなく終了 |
| `synth` | CloudFormationテンプレートを生成し、例外なし |
| `diff` | 追加・変更・削除・IAM権限が意図どおり |
| `deploy` | `✅ PortfolioSiteStack`、Stackが`*_COMPLETE` |
| コンソール確認 | 対象リソースの設定がコードどおり |

IAM Statement Changes、リソース置換、削除が表示された場合は、理解できるまでdeployしません。

### 6.4 Bootstrap

`CDKToolkit`は構築済みです。通常のStack変更ごとにbootstrapする必要はありません。CDKから更新を求められた場合に、公式資料と差分を確認して実施します。

## 7. AWSの読み取り確認

通常の調査はReadOnlyプロファイルを使います。

```powershell
aws sso login --profile codex-readonly

aws cloudformation describe-stacks `
  --stack-name PortfolioSiteStack `
  --region ap-northeast-1 `
  --profile codex-readonly `
  --no-cli-pager

aws cloudfront get-distribution `
  --id E2B6RWLK35KKQ1 `
  --profile codex-readonly `
  --no-cli-pager
```

ReadOnlyで不足する操作を見つけても、調査目的だけでAdminへ切り替えません。変更が必要かを説明し、変更作業として明示的に承認してからAdminを使用します。

## 8. 公開後の確認

### 8.1 毎回

- GitHub Actionsの対象Runが成功している。
- CloudFront URLが開き、HTTP 200となる。
- Hero、About、Portfolio、Qualifications、Skill、Contact、Footerが表示される。
- CSS・JavaScript・主要画像が404になっていない。
- 今回変更した内容が表示される。
- Pages版も維持する期間は、GitHub Pages側も同様に確認する。

### 8.2 AWS Workflow

- OIDC認証Stepが成功している。
- S3同期Stepが成功している。
- CloudFront無効化Stepが成功している。
- 必要ならCloudFrontコンソールのキャッシュ削除画面でStatusを確認する。

## 9. 監視・料金確認

### 9.1 現在利用できるもの

- CloudFront標準メトリクス: リクエスト数、転送量、4xx/5xxエラー率等
- AWS Budgets: ゼロ支出検知と月額予算通知
- Cost Anomaly Detection: 一定以上の異常コスト通知
- GitHub Actions: build・deployの成功失敗とログ
- CloudFormation: Stackイベントと変更履歴

### 9.2 CloudFrontメトリクス

AWS ConsoleでCloudFront → 対象Distribution → Monitoring/メトリクスを開きます。異常時は次を確認します。

| 指標 | 見方 |
| --- | --- |
| Requests | 急増・急減、公開後のアクセス有無 |
| Bytes downloaded | 動画・大画像による転送量増加 |
| 4xx error rate | 存在しないパス、権限、アセット参照ミス |
| 5xx error rate | CloudFrontまたはオリジン側の問題 |
| Cache hit rate | Edge Cacheから応答できた割合 |

### 9.3 アクセスログ

CloudFront標準アクセスログは未設定です。そのため、現状は「何件アクセスされたか」などの集計は標準メトリクスで確認できますが、個々のURL、時刻、User-Agentなどを行単位で追跡できません。

障害調査やアクセス分析の必要性が高まった場合に、保存先S3、保存期間、個人情報・Cookie等の扱い、費用を決めてから導入します。

### 9.4 料金

- 予算通知メールを見落とさない。
- 月1回、Billing and Cost Managementでサービス別費用を確認する。
- CloudFront転送量、リクエスト、Invalidation、S3保存量・リクエストを主に見る。
- 想定外課金を見つけたら、まずReadOnlyで発生サービスと期間を調査する。

## 10. 障害対応

### 10.1 サイトが開かない

1. GitHub Actionsの最新AWS Deploy結果を確認する。
2. CloudFront DistributionがEnabledか確認する。
3. CloudFront URLのHTTPステータスを確認する。
4. CloudFrontの5xx率を確認する。
5. S3に`index.html`があるか確認する。
6. CloudFormation Stackの状態を確認する。

### 10.2 CSS・画像だけ表示されない

1. DevTools Networkで404/403のURLを確認する。
2. GitHub Pagesなら`/portfolio-site/`、AWSなら`/`のbaseになっているか確認する。
3. S3に対象ハッシュファイルがあるか確認する。
4. `index.html`とアセットが同じbuildから同期されたか確認する。
5. CloudFront Invalidationの完了を確認する。

### 10.3 GitHub ActionsのAWS認証失敗

1. Workflowに`id-token: write`があるか確認する。
2. Role ARNと`allowed-account-ids`を確認する。
3. IAM OIDC ProviderのURLとAudienceを確認する。
4. Roleの`sub`条件がリポジトリ名と`refs/heads/main`に一致するか確認する。
5. GitHub側の一時障害を確認し、必要なら再実行する。

### 10.4 更新が反映されない

1. 対象commitが`main`にあるか確認する。
2. AWS WorkflowのS3同期まで成功したか確認する。
3. InvalidationがCompletedか確認する。
4. ブラウザのハードリロードまたはプライベートウィンドウで確認する。

## 11. ロールバック

問題のcommitを`git revert`し、`main`へpushして通常の自動デプロイを再実行します。

```powershell
git log --oneline
git revert <problem-commit>
git push origin main
```

履歴を保ったまま戻せるため、共有済みの`main`に対する`reset --hard`やforce pushは原則使用しません。

AWSインフラの切戻しも、CDKコードを以前の構成へ戻すcommitを作り、`diff`で削除・置換を確認してからdeployします。S3は`RETAIN`のため、Stack上の扱いと物理バケットの残存を分けて確認します。

## 12. 定期保守

| 頻度 | 内容 |
| --- | --- |
| 更新ごと | lint、build、画面、Actions、公開URL |
| 月1回 | AWS請求、予算通知、CloudFrontメトリクス、外部リンク |
| 3か月ごと | npm依存、GitHub Actions、Node.js、CDKの更新候補 |
| 6か月ごと | 掲載内容、資格、経歴、制作物、プロフィールURL |
| 年1回 | 要件・設計・運用文書、権利表記、不要AWSリソース |

依存更新は一度に大量に行わず、小さい単位でlint・build・表示確認をします。

## 13. バックアップ・保全

- ソースと文書はGitHubのGit履歴で保全します。
- S3はversioning未設定です。公開成果物は任意commitから再build可能であることを前提にします。
- 元画像や高解像度データが公開用リポジトリだけにしか存在しない状態を避けます。
- S3は`RemovalPolicy.RETAIN`ですが、これはバックアップそのものではありません。

## 14. 現在の運用上の判断待ち

1. AWS版を正式公開先にし、GitHub Pagesを停止する時期
2. 独自ドメインを取得するか
3. Contactを静的連絡先へ変えるか、送信APIを作るか
4. CloudFront標準アクセスログを導入するか
5. Instagramの正式URLを設定するか、リンクを削除するか
6. 大容量画像・動画をどの品質まで圧縮するか

次に優先する運用改善は、AWS版の表示を一定期間確認したうえで、GitHub Pagesとの二重公開を継続するか決定することです。
