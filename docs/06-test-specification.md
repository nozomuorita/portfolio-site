# ポートフォリオサイト テスト仕様書

最終更新日: 2026-09-27

## 1. 目的

本書は、ポートフォリオサイトの変更が要件・設計を満たし、既存機能を壊していないことを確認するためのテスト項目を定義します。自動テスト未導入の範囲は、コマンド実行とブラウザによる手動確認で補います。

## 2. テスト区分

| 区分 | 目的 | 実施タイミング |
| --- | --- | --- |
| 静的検査 | 構文・Lint違反・型の問題を検出 | commit前、CI |
| ビルドテスト | 本番成果物を生成できることを確認 | commit前、CI、デプロイ前 |
| 機能テスト | ナビ、モーダル、リンク、音声等を確認 | UI変更時 |
| 表示テスト | レスポンシブ、見切れ、重なりを確認 | UI・アセット変更時 |
| アクセシビリティ確認 | キーボード、代替テキスト、動きを確認 | UI変更時、定期 |
| デプロイテスト | Pages・AWSへ正しい成果物が届くことを確認 | `main`更新時 |
| AWS構成確認 | S3・CloudFront・IAMの安全性を確認 | CDK変更時、定期 |
| 回帰テスト | 変更と無関係な既存機能の維持を確認 | リリース前 |

## 3. テスト環境

### 3.1 ローカル

| 項目 | 基準 |
| --- | --- |
| OS | Windows 11を主な開発環境とする |
| Node.js | 22系 |
| パッケージ | `package-lock.json`に従い`npm ci` |
| 開発サーバー | `npm run dev` |
| 本番プレビュー | `npm run build`後に`npm run preview`、標準`http://localhost:4173` |

### 3.2 ブラウザ

- Chrome最新版
- Edge最新版
- Safari最新版（利用可能な端末で確認）
- Firefox最新版（主要リリース時に確認）

### 3.3 画面幅

最低限、次の代表値で確認します。

| 区分 | ビューポート例 |
| --- | --- |
| Small mobile | 320 × 568 |
| Mobile | 390 × 844 |
| Tablet portrait | 768 × 1024 |
| Desktop | 1366 × 768 |
| Wide desktop | 1920 × 1080 |
| Portrait / tall | 画面幅より高さが大きい任意のサイズ |

## 4. 実施前提

```powershell
# リポジトリルート
npm ci
npm run lint
npm run build
$LASTEXITCODE
npm run preview
```

`$LASTEXITCODE`が`0`であれば、直前の外部コマンドは正常終了です。PowerShellの通常コマンドレットとは扱いが異なる点に注意します。

AWSインフラ変更時は`infra/`で次を実行します。

```powershell
npm run build
npm run synth
.\node_modules\.bin\cdk.cmd diff PortfolioSiteStack --profile codex-admin --no-change-set
```

`deploy`は差分を理解し、変更を承認した後だけ実行します。

## 5. 静的検査・ビルドテスト

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| TB-001 | 依存関係の再現 | `npm ci` | エラーなく完了 |
| TB-002 | ESLint | `npm run lint` | Error 0件で終了コード0 |
| TB-003 | 本番ビルド | `npm run build` | `dist/`生成、Viteが成功表示 |
| TB-004 | 404生成 | build後に`dist/404.html`確認 | `index.html`と同内容のファイルが存在 |
| TB-005 | 本番プレビュー | `npm run preview` | `localhost:4173`で表示 |
| TB-006 | コンソール | ページ操作後にDevTools Console確認 | 予期しないErrorなし |
| TB-007 | アセット | DevTools NetworkでCSS/JS/画像/動画確認 | 主要アセットに404なし |

## 6. 画面・機能テスト

### 6.1 Header・Hero

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| UI-001 | 初期表示 | TOPを開く | ロゴ、氏名、副見出し、CTAが見える |
| UI-002 | Hero高さ | 横長PCで開く | Heroが概ね画面高を満たし、余分な下部露出がない |
| UI-003 | 縦長画面 | 縦長ビューポートで開く | レイアウトが崩れず、次セクションが見えてもよい |
| UI-004 | 動画 | ページを開く | 無音・ループで再生され、文字が読める |
| UI-005 | CTA | `Tell Me More ↓`を選択 | `#about`へ移動 |
| UI-006 | 固定Header | スクロール | Headerが上部に残り、縮小スタイルへ変わる |
| UI-007 | ナビ | 各有効リンクを選択 | 対応セクションへ移動 |
| UI-008 | モバイルナビ | 狭い画面で開閉・選択 | メニューが開閉し、選択後に閉じる |
| UI-009 | BGM | 音楽アイコンを2回選択 | 1回目で再生、2回目で停止 |
| UI-010 | ACCOUNT | `ACCOUNT`を選択 | 現状は移動先なし。既知課題として記録 |

### 6.2 About

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| UI-101 | プロフィール | Aboutを表示 | 画像、`nzm_ort`、趣味が表示 |
| UI-102 | 画像ぼかし | プロフィール周辺を確認 | 画像周囲が背景へ自然になじむ |
| UI-103 | 競プロリンク | AtCoder、Codeforcesを選択 | 正しいプロフィールを新規タブで開く |
| UI-104 | Timeline | 上から確認 | 幼少期から社会人まで時系列で表示 |
| UI-105 | 学会発表 | 発表一覧を確認 | 2件の年月・学会名・題目と受賞が表示 |
| UI-106 | 賞状 | PC・Mobileで確認 | 右配置または縦積みとなり、見切れない |
| UI-107 | 論文 | Publicationsを確認 | 書誌情報、著者、プレビューが表示 |
| UI-108 | 論文リンク | J-STAGEリンクを選択 | 対象論文を新規タブで開く |

### 6.3 Portfolio

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| UI-201 | 一覧件数 | Portfolioを表示 | 7件表示 |
| UI-202 | カード高さ | 同一行を比較 | カード外形が揃う |
| UI-203 | ホバー | PCでカードへポインターを置く | 青系オーバーレイとプラスを表示 |
| UI-204 | モーダル | 各カードを選択 | 対応するタイトル・画像・説明を表示 |
| UI-205 | 閉じる | ×またはClose Projectを選択 | モーダルが閉じる |
| UI-206 | 外部リンク | GitHubリンクを選択 | 対応リポジトリを新規タブで開く |
| UI-207 | 未設定リンク | リンクのない作品を確認 | 誤ったリンクへ移動しない |

### 6.4 Qualifications・Skill

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| UI-301 | 資格件数 | Qualificationsを表示 | 11件表示 |
| UI-302 | 画像収まり | そろばん・G検定・AWS等を確認 | 重要部分が見切れない |
| UI-303 | AWS資格 | 対象カード確認 | `AWS Certified Cloud Practitioner`、`2025年12月取得`を表示 |
| UI-304 | 資格カード | 同一行を比較 | 高さ・画像領域が揃う |
| UI-305 | Skill件数 | Skillを表示 | 15件表示 |
| UI-306 | 外部アイコン | Networkと表示を確認 | Deviconが取得でき、主要アイコンが表示 |

### 6.5 Contact・Footer

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| UI-401 | Contact背景 | Wide画面で確認 | 左右に黒帯を出さず背景が領域を覆う |
| UI-402 | 未実装表示 | Contactを確認 | `Not working`が表示される |
| UI-403 | 送信抑止 | Send Messageを確認 | 無効状態で送信されない |
| UI-404 | GitHub | FooterのGitHubを選択 | 所有者のGitHubを新規タブで開く |
| UI-405 | Instagram | FooterのInstagramを選択 | 現状はダミーURL。既知課題として記録 |
| UI-406 | Back to top | Footerリンクを選択 | `#top`へ戻る |
| UI-407 | 年表示 | Footerを確認 | 現在年を表示 |

## 7. レスポンシブ・視覚テスト

| ID | 確認内容 | 期待結果 |
| --- | --- | --- |
| RV-001 | 320px幅 | 横スクロールなし、操作可能 |
| RV-002 | 390px幅 | テキストやボタンが画面外へ出ない |
| RV-003 | 768px幅 | カードと研究画像が自然に折り返す |
| RV-004 | 1366px幅 | Hero・カード・Timelineが意図どおり配置 |
| RV-005 | 1920px幅 | 名前が過大にならず、コンテンツが間延びしない |
| RV-006 | ズーム200% | 主要情報と操作が失われない |
| RV-007 | 長い英語題名 | 研究・論文タイトルが領域を破らない |
| RV-008 | スクロールバー非表示 | スクロール自体はホイール・キー・タッチで可能 |

## 8. アクセシビリティ確認

| ID | 確認内容 | 期待結果・現状 |
| --- | --- | --- |
| AC-001 | Tab移動 | 主要リンク・ボタンへ論理順で移動できる |
| AC-002 | フォーカス | 現在位置を視覚的に判別できる |
| AC-003 | モーダル | キーボードで開閉でき、閉じた後に操作を継続できる |
| AC-004 | 画像代替 | 意味のある画像に説明、装飾画像に空`alt`がある |
| AC-005 | アイコン操作 | 音楽操作に名前・適切な要素がある。現状は要改善 |
| AC-006 | 色 | 通常・ホバー・フォーカスで文字を判別できる |
| AC-007 | Reduced motion | 動きを減らす設定で不要なアニメーションを抑制。動画は未対応 |
| AC-008 | 見出し | ページ構造が見出しレベルで理解できる |

アクセシビリティ改善前の既知不適合は、テスト失敗として隠さず課題IDと関連付けます。

## 9. GitHub Actions・デプロイテスト

| ID | テスト内容 | 操作 | 期待結果 |
| --- | --- | --- | --- |
| DP-001 | PR CI | `main`向けPR作成 | `CI`が起動しlint・build成功、デプロイなし |
| DP-002 | Pages自動公開 | `main`へpush | `Deploy to GitHub Pages`成功 |
| DP-003 | AWS自動公開 | `main`へpush | `Deploy to AWS`成功 |
| DP-004 | Pages base | Pages公開URLを開く | JS/CSS/画像が404にならない |
| DP-005 | AWS base | CloudFront URLを開く | ルート配下からJS/CSS/画像を取得 |
| DP-006 | S3削除同期 | 削除したアセットを含む安全な変更 | 旧オブジェクトが`--delete`で除去 |
| DP-007 | キャッシュ無効化 | AWS Workflow確認 | Invalidationが作成され最終的にCompleted |
| DP-008 | OIDC制約 | IAM信頼関係確認 | 対象repoの`main`だけが許可 |
| DP-009 | 並行実行 | 短時間に複数push | 同じ公開先への実行が直列化される |

## 10. AWS構成テスト

調査は原則`codex-readonly`、変更・デプロイは明示的に`codex-admin`を使用します。

| ID | 確認対象 | 期待結果 |
| --- | --- | --- |
| AWS-001 | CloudFormation | `PortfolioSiteStack`が`*_COMPLETE` |
| AWS-002 | S3 Public Access Block | 4項目すべて`true` |
| AWS-003 | S3暗号化 | SSE-S3 / AES256 |
| AWS-004 | S3 Bucket Policy | 非TLSをDeny |
| AWS-005 | S3 Bucket Policy | 対象CloudFrontからの`GetObject`だけAllow |
| AWS-006 | S3直接URL | 一般閲覧者からコンテンツを取得できない |
| AWS-007 | CloudFront | EnabledかつDeploy済み |
| AWS-008 | CloudFront HTTPS | HTTPアクセスがHTTPSへ転送 |
| AWS-009 | OAC | S3オリジンに関連付く |
| AWS-010 | IAM Role | 対象S3とDistribution以外の広い権限がない |
| AWS-011 | CDK diff | 意図した差分だけ表示 |
| AWS-012 | 削除方針 | S3にRetainが設定される |

## 11. セキュリティ・公開前確認

- [ ] `.env`、アクセスキー、SSOトークン、APIキー、個人の秘密情報が追跡されていない。
- [ ] `dist/`内にも秘密情報がない。
- [ ] 外部リンクのURLが意図した宛先である。
- [ ] `target="_blank"`に`rel`が付いている。
- [ ] Contactが実送信できるように見えない。
- [ ] `git diff`に意図しない生成物や大容量ファイルがない。
- [ ] GitHub Actionsの権限が必要最小限である。
- [ ] CDK差分に予期しないIAM権限拡大やリソース置換がない。

## 12. テスト結果の記録

大きな変更では、Pull Requestまたは作業記録に次を残します。

```markdown
## Test result

- Date: YYYY-MM-DD
- Commit: <commit SHA>
- Environment: Chrome xx / 1920x1080, iPhone相当 390x844
- `npm run lint`: Pass / Fail
- `npm run build`: Pass / Fail
- Manual cases: UI-001, UI-005, ...
- GitHub Pages: Pass / Not tested
- CloudFront: Pass / Not tested
- Known issues: ISS-xxx
```

## 13. 合否判定

- Must要件に関するテスト失敗、ビルド失敗、秘密情報混入、AWS権限の意図しない拡大があれば公開しません。
- 既知の未実装項目は、要件定義書に状態と課題が明記され、今回変更で悪化していなければ条件付きで許容できます。
- 表示差は、情報欠落・操作不能・重なり・横スクロールを不合格とし、軽微な余白差は意図を確認して判断します。
