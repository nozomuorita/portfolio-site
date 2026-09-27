# ポートフォリオサイト詳細設計書

最終更新日: 2026-09-27

## 1. 目的

本書は、Reactアプリケーションのモジュール構成、データ保持、イベント処理、スタイル、ビルド仕様を、保守・改修に必要な粒度で定義します。

## 2. ディレクトリ構成

```text
portfolio-site/
├─ .github/workflows/       # CI/CD
├─ docs/                    # 開発文書
├─ infra/                   # AWS CDKアプリケーション
├─ src/
│  ├─ assets/
│  │  ├─ about/
│  │  ├─ brand/
│  │  ├─ contact/
│  │  ├─ hero/
│  │  ├─ icons/
│  │  ├─ portfolio/
│  │  ├─ profile/
│  │  ├─ qualifications/
│  │  └─ skills/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ HomePage.jsx
│  │  └─ section/
│  │     ├─ About.jsx
│  │     ├─ Portfolio.jsx
│  │     ├─ Qualification.jsx
│  │     ├─ skill.jsx
│  │     ├─ Contact.jsx
│  │     └─ Footer.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

`dist/`と`infra/cdk.out/`は生成物であり、手編集しません。

## 3. 起動シーケンス

1. `index.html`が`#root`要素と`/src/main.jsx`を読み込む。
2. `main.jsx`がBootstrap CSSと`index.css`を読み込み、Reactの`StrictMode`で`App`を描画する。
3. `App.jsx`が`App.css`を読み込み、`Header`と`HomePage`を描画する。
4. `HomePage`がHeroと各セクションを順番に描画する。
5. Bootstrap Bundleが、`data-bs-*`属性を持つナビゲーションとモーダルの動作を提供する。

## 4. コンポーネント仕様

| コンポーネント | 入力 | 状態 | 主な責務 |
| --- | --- | --- | --- |
| `App` | なし | なし | 全体レイアウトの入口 |
| `Header` | なし | `audioRef` | 固定ナビ、スクロール時表示、モバイルメニュー、BGM |
| `HomePage` | なし | なし | Heroとセクションの表示順を定義 |
| `About` | なし | なし | プロフィール、経歴、発表、論文 |
| `Portfolio` | なし | なし | 制作物カードとモーダルをデータから生成 |
| `Qualification` | なし | なし | 資格カードをデータから生成 |
| `Skill` | なし | なし | スキル一覧をデータから生成 |
| `Contact` | なし | なし | 送信不可フォームの表示 |
| `Footer` | なし | 現在年を実行時算出 | 外部リンク、著作権、先頭リンク |

### 4.1 Header

#### ナビゲーションデータ

`navigationItems`は`href`と`label`の配列です。項目追加時は、対象IDがDOM上に存在することを同時に確認します。

#### スクロール処理

- マウント時に`#mainNav`、`.navbar-toggler`、ナビリンク群を取得します。
- `window.scrollY !== 0`の場合、`navbar-shrink`クラスを付与します。
- `document`の`scroll`イベントを監視します。
- ナビリンク選択時、トグルボタンが表示中ならクリックしてメニューを閉じます。
- アンマウント時に全イベントリスナーを解除します。

#### BGM処理

- マウント時に`new Audio(audioSource)`を生成し、`useRef`に保持します。
- 操作時に`audio.paused`を判定し、`play()`または`pause()`を実行します。
- アンマウント時に停止し、参照を破棄します。
- 現状は再生中かどうかをReact状態で保持していません。

改善時は操作要素を`<button>`にし、`aria-label`または表示文字、押下状態、フォーカス表示を追加します。

### 4.2 Hero / HomePage

- 動画属性: `autoPlay`、`loop`、`muted`、`playsInline`
- オーバーレイ: 動画と文字の間に配置
- 主見出し: `NOZOMU ORITA`
- CTA: `href="#about"`、矢印は文字`↓`
- セクション順: About → Portfolio → Qualification → Skill → Contact → Footer

### 4.3 About

#### データ

`conferencePresentations`に以下を保持します。

```text
date / event / note（任意）/ title / award（任意）
```

TimelineとPublicationsは現状JSXへ直接記述しています。件数増加時は、同様に配列へ分離します。

#### 画像表示

- プロフィールは同じ画像を2枚使用し、背面画像にぼかし、前面画像にマスクを適用します。
- Timeline画像は円形表示です。
- 学会発表と論文は`figure`と`figcaption`を使用し、画像の意味を示します。
- 研究画像は`loading="lazy"`と`decoding="async"`を使用します。

### 4.4 Portfolio

#### データモデル

| 項目 | 型・意味 |
| --- | --- |
| `id` | 数値。DOM上のモーダルIDにも使用 |
| `title` | 制作物名 |
| `image` | importした画像URL |
| `cardDescription` | 一覧カードの短い説明 |
| `intro` | モーダル冒頭の説明 |
| `details` | JSX。詳細、リンク等 |
| `tools` | `toolIcons`のキー配列 |
| `cardTarget` | 任意。現状1件だけ`_blank`だが、モーダル用途では不要 |

`renderProjectCard`と`renderProjectModal`で同じデータから一覧と詳細を生成します。モーダルIDは`portfolioModal${id}`です。

Bootstrap JSが次を処理します。

- カードの`data-bs-toggle="modal"`
- `href="#portfolioModalN"`と対象IDの関連付け
- 閉じる要素の`data-bs-dismiss="modal"`

### 4.5 Qualification

データ項目は`title`、`date`、`image`または`Icon`、任意の`fit`です。`fit: 'contain'`の場合、`qual-img--contain`を追加し、画像全体を領域内へ収めます。自動車免許だけMUIアイコンを使用します。

### 4.6 Skill

データ項目は`name`、`icon`、任意の`iconClassName`、`description`です。大半のアイコンはDevicon CDN URLを組み立てます。Whitespaceは意図的に空のアイコンです。

### 4.7 Contact

- `data-sb-form-api-token="API_TOKEN"`はプレースホルダーです。
- 送信ボタンには`disabled`クラスがあり、実送信しません。
- `index.html`ではSB Formsスクリプトを読み込んでいますが、機能は有効化されていません。
- バックエンド実装前に、フォームへ実トークンを直接埋め込まないことと、個人情報の取扱方針を決定します。

### 4.8 Footer

- 年は`new Date().getFullYear()`で表示時に算出します。
- 外部リンクは`target="_blank"`と`rel="noreferrer"`を使用します。
- `Back to top`は`#top`へ移動します。

## 5. スタイル設計

### 5.1 CSSの責務

| ファイル | 責務 |
| --- | --- |
| `src/index.css` | Bootstrap由来の共通スタイル、テンプレートスタイル、既存の大部分のセクションスタイル |
| `src/App.css` | 現在のサイト固有調整、Hero、プロフィール、研究実績、カード、Footer等 |

両ファイルに関連スタイルが分散しているため、新規スタイルは責務を明確にし、将来はテンプレート由来CSSとサイト固有CSSの整理を検討します。

### 5.2 命名

- 新規のまとまりは`about-profile__name`のようなBEMに近い命名を優先します。
- Bootstrapのユーティリティクラスと既存テンプレートクラスは互換性のため維持します。
- JavaScriptが参照するID・クラスを変更するときは、イベント処理も同時に変更します。

### 5.3 主要表示方式

- Hero動画: `object-fit: cover`
- Contact背景: 背景画像を領域全体へ`cover`
- 資格画像: 通常と`contain`指定を使い分ける
- プロフィール画像: CSSマスクと`blur(20px)`相当の背面レイヤー
- 見出し: `clamp()`で画面幅に応じて拡縮
- Portfolioカード: Flexbox等で高さを揃える

## 6. アセット設計

| ディレクトリ | 内容 |
| --- | --- |
| `assets/brand` | サイトロゴ |
| `assets/hero` | 背景動画、BGM |
| `assets/profile` | プロフィール画像 |
| `assets/about/timeline` | 経歴画像 |
| `assets/about/research` | 賞状、論文プレビュー |
| `assets/portfolio` | 制作物画像 |
| `assets/qualifications` | 資格関連画像 |
| `assets/skills` | ローカル管理する技術画像 |
| `assets/contact` | Contact背景 |
| `assets/icons` | UI用SVG |

ファイル名は用途が分かる英小文字・ハイフン区切りを使用し、コンポーネントからimportします。Viteは本番ビルド時に内容ハッシュを付けて`dist/assets`へ出力します。

## 7. ビルド設計

### 7.1 npm scripts

| コマンド | 処理 |
| --- | --- |
| `npm run dev` | Vite開発サーバーを起動 |
| `npm run lint` | ESLintでソースを静的検査 |
| `npm run build` | Viteで`dist/`を生成 |
| `npm run postbuild` | `dist/index.html`を`dist/404.html`へ複製 |
| `npm run preview` | `dist/`をローカル配信。標準URLは`http://localhost:4173` |

`postbuild`は`npm run build`成功後にnpmが自動実行します。

### 7.2 Viteのbase

```js
base: process.env.GITHUB_PAGES === 'true' ? '/portfolio-site/' : '/'
```

| ビルド先 | 環境変数 | base |
| --- | --- | --- |
| ローカル / AWS | 未設定 | `/` |
| GitHub Pages | `GITHUB_PAGES=true` | `/portfolio-site/` |

この分岐により、リポジトリ配下URLのGitHub PagesとルートURLのCloudFrontで同じソースを利用できます。

## 8. 依存関係

主な直接依存はReact、React DOM、Bootstrap、React Bootstrap、MUI、Emotionです。BootstrapのJS Bundle、Google Fonts、Font Awesome、SB Formsは`index.html`から外部配信を参照しています。

依存更新時は次を確認します。

1. Node.js 22で`npm ci`できる。
2. `npm run lint`と`npm run build`が成功する。
3. Bootstrapのモーダルとモバイルメニューが動く。
4. MUIアイコンが表示される。
5. GitHub Actionsで利用するActionのメジャーバージョンが正しい。

## 9. エラー処理・フォールバック

- BGMの`play()`はPromiseを待たず、ブラウザ側の自動再生制限による失敗をUI表示していません。
- 外部画像CDNが失敗するとスキル・ツールアイコンが欠けます。
- Hero動画の代替画像は未設定です。
- React Error Boundaryは未実装です。
- SPAルーティングはありませんが、静的ホスト用に`404.html`を生成します。

## 10. 既知の技術的改善候補

1. HeaderのBGM操作を`button`化し、状態を表示する。
2. `ACCOUNT`リンクと実在セクションを一致させる。
3. Portfolio・資格画像へ適切な`alt`を設定する。
4. Contactの未使用SB Formsスクリプトとフォームを再設計する。
5. `html lang="en"`、description、author、OGPを見直す。
6. 大容量画像・動画を圧縮し、必要ならレスポンシブ画像を導入する。
7. `prefers-reduced-motion`時にHero動画を停止または静止画へ置換する。
8. `src/index.css`のテンプレート由来・未使用部分を段階的に整理する。
9. コンポーネントファイル名の大文字小文字を統一する（`skill.jsx`など）。
10. ユニットテストまたはE2Eテストを導入する。

## 11. 変更時の影響範囲

| 変更 | 同時に確認する対象 |
| --- | --- |
| セクションID | Headerリンク、CTA、Footer、テストケース |
| アセット名・場所 | import文、ビルド出力、404有無 |
| Portfolioデータ | 一覧、モーダルID、リンク、カード高さ |
| 資格データ | 画像fit、カード高さ、権利表示 |
| Vite base | GitHub PagesとCloudFrontの双方 |
| 依存バージョン | npm lockfile、lint、build、モーダル、アイコン |
| Contact仕様 | プライバシー、API、エラー表示、スパム対策 |
