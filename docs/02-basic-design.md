# ポートフォリオサイト基本設計書

最終更新日: 2026-09-27

## 1. 目的

本書は、要件を実現するためのサイト全体構成、画面構成、外部サービスとの関係、共通方式を定義します。Reactコンポーネント単位の実装は[03-detailed-design.md](03-detailed-design.md)で扱います。

## 2. システム全体像

本サイトは、ブラウザ上で動作する1ページ構成の静的Webアプリケーションです。サーバー側のアプリケーションやデータベースは持ちません。

```text
開発者
  └─ GitHubへpush
       └─ GitHub Actionsでlint・build
            ├─ GitHub Pagesへ公開（移行期間中）
            └─ S3へ配置 → CloudFrontから公開（AWS版）

閲覧者
  ├─ GitHub Pages URL
  └─ CloudFront URL → 非公開S3の静的ファイル
```

## 3. 採用技術と役割

| 分類 | 技術 | 役割 |
| --- | --- | --- |
| UI | React 18 | 画面をコンポーネントで構成 |
| ビルド | Vite 4 | 開発サーバー、本番向け静的ファイル生成 |
| UI補助 | Bootstrap / React Bootstrap / MUI | レイアウト、モーダル、アイコン |
| スタイル | CSS | サイト固有デザインとレスポンシブ対応 |
| ソース管理 | GitHub | バージョン管理、Pull Request、Actions |
| CI/CD | GitHub Actions | lint、build、GitHub Pages・AWSへの公開 |
| AWS IaC | AWS CDK v2 / TypeScript | AWSリソースをコードで定義 |
| オリジン | Amazon S3 | `dist/`の静的ファイルを非公開で保管 |
| CDN | Amazon CloudFront | HTTPS配信、キャッシュ、S3への代理アクセス |
| AWS認証 | GitHub OIDC + IAMロール | 長期アクセスキーを使わない自動デプロイ |

## 4. 画面構成

画面は1ページで、次の順番に表示します。

```text
Header（固定）
└─ Hero / TOP
   └─ About
      ├─ Profile
      ├─ Timeline
      ├─ Conference Presentations
      └─ Publications
         └─ Portfolio
            └─ Qualifications
               └─ Skill
                  └─ Contact
                     └─ Footer
```

### 4.1 共通レイアウト

| 項目 | 仕様 |
| --- | --- |
| ページ形式 | アンカーリンクで移動する縦長の1ページ |
| コンテンツ幅 | Bootstrapの`.container`を基準に中央配置 |
| 見出し | Montserrat系、大文字英語を基本とする |
| 本文 | 日本語中心。研究タイトルや固有名称は原文を使用 |
| 配色 | 夜景・ネイビー・白を基調とし、青系をアクセントにする |
| セクション背景 | 白と淡色を交互に使い、内容の区切りを作る |
| スクロールバー | 視覚上は非表示だが、ページ自体はスクロール可能 |

## 5. セクション設計

### 5.1 Header

| 項目 | 設計 |
| --- | --- |
| 位置 | 画面上部に固定 |
| ブランド | 左側に`NZM_ORT`ロゴ。TOPへ戻るリンク |
| ナビゲーション | TOP、ABOUT、PORTFOLIO、QUALIFICATIONS、SKILL、ACCOUNT |
| PC | 横並び表示 |
| 狭い画面 | ハンバーガーメニューへ折り畳む |
| スクロール時 | `navbar-shrink`を付与し、背景・余白を変化させる |
| BGM | 音楽アイコンの操作で再生・停止 |

`ACCOUNT`は遷移先がないため、現状の既知課題です。

### 5.2 Hero

| 項目 | 設計 |
| --- | --- |
| 背景 | 都市夜景のMP4動画を自動再生、ループ、ミュート、インライン再生 |
| 前景 | 暗色オーバーレイで文字の可読性を確保 |
| 主表示 | `NOZOMU ORITA`を最も大きく表示 |
| 副表示 | `Welcome To My PortFolio` |
| CTA | `Tell Me More ↓`からAboutへ移動 |
| 高さ | 横長画面では画面高を基準とし、極端な縦長画面では次の内容が見えてよい |

### 5.3 About

Aboutは4つの情報群で構成します。

1. Profile: 画像、`nzm_ort`、趣味、AtCoder・Codeforcesへのリンク
2. Timeline: 幼少期から社会人までの経歴
3. Conference Presentations: 学会名、年月、発表題目、受賞情報、賞状画像
4. Publications: 論文情報、著者、掲載誌、J-STAGEリンク、プレビュー画像

プロフィール画像は矩形の枠を設けず、同じ画像のぼかしレイヤーを背面に置いて背景となじませます。研究実績はPCでは本文と画像を横並び、狭い画面では縦並びにします。

### 5.4 Portfolio

| 状態 | 表示・動作 |
| --- | --- |
| 通常 | 3列を基本とするカード一覧。画像、タイトル、概要を表示 |
| ホバー | 青系の半透明レイヤーとプラスアイコンを表示 |
| 選択 | Bootstrapモーダルで大きな画像、説明、利用技術、リンクを表示 |
| 狭い画面 | 2列または1列へ折り返す |

全カードは同じ高さ・画像領域となるようにし、文章量による不揃いを抑えます。

### 5.5 Qualifications

- 資格名、取得年月、関連画像またはアイコンをカード形式で表示します。
- 3列を基本とし、狭い画面では列数を減らします。
- 画像は所定領域に`contain`または`cover`で収め、そろばん検定、G検定、AWS認定バッジなどが見切れないよう個別指定できます。
- 権利者のロゴ・認定バッジを利用する場合は、利用条件を確認します。

### 5.6 Skill

- 技術名、アイコン、短い利用経験を3列の一覧で表示します。
- Devicon CDNのアイコンと、リポジトリ内の画像を併用します。
- 習熟度の数値評価は行わず、利用場面を短く説明します。

### 5.7 Contact

現状は氏名、メール、電話番号、本文のフォームを表示していますが、送信機能はありません。`Not working`および無効な送信ボタンで、その状態を表示します。

将来は次のどちらかを選びます。

- メールアドレスやSNSなど、静的な連絡先表示へ簡素化する。
- API Gateway、Lambda、SES等を用いて送信機能を実装する。

### 5.8 Footer

| 項目 | 設計 |
| --- | --- |
| 左側 | 氏名と現在年の著作権表示 |
| 右側 | GitHub、Instagram、Back to top |
| Instagram | 正式URL未設定のためダミー |
| 狭い画面 | 縦方向へ折り返し、中央寄せ |

## 6. レスポンシブ設計

| 区分 | 目安 | 主な変化 |
| --- | --- | --- |
| Mobile | 320–575px | 1列中心、ヘッダー折り畳み、見出し・余白縮小 |
| Tablet | 576–991px | 2列中心、研究セクションは必要に応じ縦積み |
| Desktop | 992px以上 | ヘッダー横並び、カード3列、研究本文と画像を横並び |
| Wide | 1440px以上 | コンテンツ幅を無制限に広げず中央配置を維持 |

固定ピクセルだけに依存せず、Heroの文字などは`clamp()`で画面幅に応じて調整します。

## 7. ナビゲーション・URL設計

クライアント側ルーターは使用せず、ページ内アンカーを利用します。

| URL断片 | 対象 |
| --- | --- |
| `#top` | Hero |
| `#about` | About |
| `#portfolio` | Portfolio |
| `#qualifications` | Qualifications |
| `#skill` | Skill |
| `#contact` | Contact。Headerには未掲載 |
| `#account` | 対応要素なし。要改善 |

`postbuild`で`dist/index.html`を`dist/404.html`へ複製します。これは静的ホスティング上で未解決パスへアクセスした場合のフォールバック用です。

## 8. 外部インターフェース

| 対象 | 方式 | 目的 |
| --- | --- | --- |
| GitHub / AtCoder / Codeforces / J-STAGE | HTTPSリンク | 詳細情報へ移動 |
| Google Fonts | CSS配信 | Montserrat等のフォント読込 |
| Font Awesome | CDN | 一部アイコン表示 |
| Devicon | jsDelivr CDN | 技術アイコン表示 |
| Bootstrap JS | jsDelivr CDN | モーダル・折り畳み動作 |
| SB Forms | Start Bootstrap CDN | 現在読み込みあり。ただしAPIトークン未設定 |

外部CDN障害時は該当フォント・アイコン・動作に影響する可能性があります。重要度に応じてローカル配信への移行を検討します。

## 9. SEO・共有設計

| 項目 | 現状 | 目標 |
| --- | --- | --- |
| `<title>` | `NOZOMU ORITA` | 維持 |
| `lang` | `en` | 主本文に合わせ`ja`を検討 |
| description | 空 | サイト内容を表す説明を追加 |
| author | 空 | 所有者名を設定 |
| OGP | 未設定 | 公開URL確定後に追加 |
| favicon | 明示設定なし | ブランドに合わせて追加検討 |

## 10. エラー・障害時の考え方

- 静的アセット取得失敗時でも、可能な範囲で本文が読める構造にします。
- 外部リンクはサイト本体と切り離し、リンク先障害が全体表示を妨げないようにします。
- Contactは送信機能がないため、成功表示を出しません。
- AWS版の更新が不完全な場合は、正常コミットの再デプロイとCloudFrontキャッシュ無効化で復旧します。

## 11. セキュリティ設計の要約

- ブラウザへ秘密情報を埋め込まない。
- AWS版のS3は非公開とし、CloudFront OACだけに読み取りを許可する。
- 閲覧者からはCloudFrontのHTTPS URLを利用する。
- GitHub ActionsはOIDCで短期AWS認証情報を取得する。
- IAMロールの信頼条件は対象リポジトリの`main`ブランチに限定する。
- デプロイ権限は対象S3と対象CloudFrontディストリビューションに限定する。

## 12. 関連文書

- 詳細なコンポーネント仕様: [03-detailed-design.md](03-detailed-design.md)
- AWS構成: [04-aws-architecture.md](04-aws-architecture.md)
- CI/CD: [05-cicd-and-deployment.md](05-cicd-and-deployment.md)
- テスト: [06-test-specification.md](06-test-specification.md)
