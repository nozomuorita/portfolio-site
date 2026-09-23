# GitHub Pages CI/CD設計・運用手順書

最終更新日: 2026-09-23

## 1. この文書の目的

本書は、ポートフォリオサイトをGitHub Pagesへ公開する現在のCI/CD構成について、次の内容を記録します。

> **用語:** 現在の`docs/`は設計文書専用です。本書の「旧公開用`docs/`」は、以前GitHub Pagesへ配信していたビルド成果物ディレクトリを指します。

- 旧デプロイ方式と、その問題点
- 現在の自動デプロイ方式
- 変更したファイルとGitHub側の設定
- GitHub Actionsワークフローの各処理の役割
- Viteの`base`設定が必要な理由
- 日常的な更新、確認、障害対応、ロールバックの方法
- 将来AWSへ移行するときに変更する箇所

CI（Continuous Integration）は、変更したコードを自動で検査・ビルドする仕組みです。CD（Continuous Deployment）は、検査を通過した成果物を自動で公開する仕組みです。

## 2. 結論

現在は、`main`ブランチへのpushを起点としてGitHub Actionsが次を自動実行します。

```text
mainへpush
  ↓
ソースコードを取得
  ↓
Node.js 22を準備
  ↓
npm ci
  ↓
npm run lint
  ↓
npm run build
  ↓
dist/をPages用artifactとしてアップロード
  ↓
GitHub Pagesへデプロイ
```

ローカルで`dist/`を旧公開用`docs/`へコピーしたり、ビルド成果物をGitへコミットしたりする必要はありません。

公開URLは次のとおりです。

```text
https://nozomuorita.github.io/portfolio-site/
```

## 3. 旧方式

### 3.1 旧デプロイフロー

以前は次の流れで公開していました。

```text
ローカルでソースコードを変更
  ↓
ローカルでViteを実行
  ↓
dist/を生成
  ↓
dist/の内容を旧公開用docs/へコピー
  ↓
旧公開用docs/をGitへコミット
  ↓
mainへpush
  ↓
GitHub Pagesがmain/docsを公開
```

この方式でGitHub Pagesが配信していたのはReactのソースコードではなく、Gitにコミットされた旧公開用`docs/`内の静的ファイルです。GitHub側でViteのビルドは行われていませんでした。

### 3.2 旧package.json

旧設定には次のスクリプトがありました。

```json
{
  "homepage": "http://nozomuorita.github.io/portfolio-site",
  "scripts": {
    "predeploy": "npm run build",
    "build": "vite build",
    "rebuild": "vite build && rm -R docs && cp -r dist docs",
    "postbuild": "node -e \"require('node:fs').copyFileSync('dist/index.html', 'dist/404.html')\""
  }
}
```

### 3.3 docsへコピーされなかったと考えられる理由

確認できた設定と実行環境から、主に次の2点が考えられます。

1. `npm run build`だけを実行した場合
   - `npm run build`は`dist/`を生成するだけです。
   - 旧公開用`docs/`へのコピーは`npm run rebuild`を明示的に実行しない限り行われません。
2. Windowsで`npm run rebuild`を実行した場合
   - `rm`と`cp`は主にLinux/macOSで使われるコマンドです。
   - 通常のWindows npm実行環境では認識されず、`rm -R docs`で停止する可能性があります。
   - `&&`で接続されているため、`rm`が失敗すると後続の`cp -r dist docs`は実行されません。

想定される失敗の流れは次のとおりです。

```text
vite build       → 成功し、dist/は生成される
rm -R docs       → Windows環境で失敗
cp -r dist docs  → 実行されない
```

また、`rebuild`は`npm run build`ではなく`vite build`を直接呼んでいました。そのため、npmの`postbuild`ライフサイクルは`rebuild`からは自動実行されません。

### 3.4 旧方式の課題

- OSによってコピー用コマンドの挙動が異なる。
- ソース変更とビルド成果物の更新漏れが起きる。
- 旧公開用`docs/`に古いハッシュ付きJS・CSSが蓄積しやすい。
- ビルド成果物をGit管理するため、リポジトリ容量が増える。
- ローカル環境によって生成結果が変わる可能性がある。
- push前に手作業が必要で、手順の再現性が低い。

## 4. 現在の方式

### 4.1 現行デプロイフロー

```text
開発者
  │ mainへpush
  ▼
GitHub Actions
  │ npm ci / lint / build
  ▼
dist/
  │ Pages artifactとして一時保存
  ▼
GitHub Pages
  │ HTTPSで配信
  ▼
閲覧者
```

`dist/`はGitHub Actions内で生成される一時的なartifactです。artifactはワークフロー間で成果物を受け渡す仕組みであり、Gitリポジトリにはコミットされません。

### 4.2 CIとCDの境界

| 区分 | 処理 | 目的 |
| --- | --- | --- |
| CI | `npm ci` | lockファイルに基づき依存関係を再現する |
| CI | `npm run lint` | コード上の問題を検出する |
| CI | `npm run build` | 本番用ファイルを生成できるか確認する |
| CD | Pages artifactのアップロード | buildジョブからdeployジョブへ成果物を渡す |
| CD | GitHub Pagesへのデプロイ | 成果物を公開環境へ反映する |

CIが失敗した場合はCDへ進みません。そのため、ビルドできない変更によって公開中のサイトが置き換わることはありません。

## 5. 変更した場所

### 5.1 GitHub Actionsワークフローの追加

追加ファイル:

```text
.github/workflows/ci.yml
.github/workflows/deploy-pages.yml
```

`ci.yml`は`main`向けPull Requestでlintとbuildだけを実行します。`deploy-pages.yml`は`main`へのpushで同じ検証を行った後、GitHub Pagesへデプロイします。

`deploy-pages.yml`の定義は次のとおりです。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v7

      - name: Setup Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Configure Pages
        uses: actions/configure-pages@v6

      - name: Build
        run: npm run build
        env:
          GITHUB_PAGES: "true"

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

Actionのメジャーバージョンは2026-09-21時点の採用値です。将来更新する場合は、各Actionのリリースノートで破壊的変更を確認します。

### 5.2 Viteのbase変更

変更ファイル:

```text
vite.config.js
```

現在の設定:

```js
base: process.env.GITHUB_PAGES === 'true' ? '/portfolio-site/' : '/'
```

GitHub Pagesのプロジェクトサイトはドメイン直下ではなく、リポジトリ名を含むパスで公開されます。

```text
https://nozomuorita.github.io/portfolio-site/
```

そのため、JavaScriptやCSSのURLも次の形である必要があります。

```text
/portfolio-site/assets/index-xxxx.js
/portfolio-site/assets/index-xxxx.css
```

`base`を`/`にしたままPagesへ公開すると、ブラウザは次の誤った場所を参照します。

```text
https://nozomuorita.github.io/assets/index-xxxx.js
```

この場合、JavaScriptやCSSが404となり、画面が白くなる可能性があります。

環境別の値は次のとおりです。

| 環境 | `GITHUB_PAGES` | Vite `base` |
| --- | --- | --- |
| ローカル開発 | 未設定 | `/` |
| ローカルの通常ビルド | 未設定 | `/` |
| GitHub Pages用Actions | `true` | `/portfolio-site/` |
| 将来のAWS配信 | 未設定 | `/` |

### 5.3 package.jsonの整理

削除した項目:

```json
"homepage": "http://nozomuorita.github.io/portfolio-site",
"predeploy": "npm run build",
"rebuild": "vite build && rm -R docs && cp -r dist docs"
```

削除理由:

- `homepage`は主にCreate React Appで使われる設定であり、Viteでは`base`を使用する。
- `predeploy`は対応する`npm run deploy`を実行したときに使われるが、`deploy`スクリプトが存在しなかった。
- `rebuild`は手動コピーを前提とし、Windowsとの互換性にも問題があった。

残した項目:

```json
"build": "vite build",
"postbuild": "node -e \"require('node:fs').copyFileSync('dist/index.html', 'dist/404.html')\""
```

`npm run build`を実行すると、npmは`build`の成功後に`postbuild`を自動実行します。その結果、次が生成されます。

```text
dist/index.html
dist/404.html
```

`404.html`は、GitHub Pagesで存在しないURLへアクセスした際のフォールバックとして使用します。現状はReact Routerを使用していませんが、直接アクセス時の表示崩れを抑える目的で維持します。

### 5.4 README・設計書の更新

次を文書へ反映しました。

- `main`へのpushで自動デプロイされること
- ローカルで`dist/`を旧公開用`docs/`へコピーする必要がないこと
- GitHub Pages用`base`とAWS用`base`の違い
- 旧公開用`docs/`をGit管理する運用を廃止したこと

### 5.5 docsディレクトリの削除

新しいActions方式でデプロイできることを確認した後、旧公開用`docs/`のビルド成果物を削除しました。その後、`docs/`という名前は設計文書ディレクトリとして再利用しています。

削除前に新方式を動作確認した理由は、設定変更と旧公開物削除を同時に行ってサイトが停止するリスクを避けるためです。

`dist/`は`.gitignore`の対象なので、今後もビルド成果物はGitへコミットされません。

## 6. ワークフロー各項目の説明

### 6.1 実行条件

```yaml
on:
  push:
    branches:
      - main
  workflow_dispatch:
```

- `push.branches: main`: `main`へpushされた場合に自動実行する。
- `workflow_dispatch`: GitHubのActions画面から手動実行できるようにする。

Pull Request作成時は、別の`CI`ワークフローがlintとbuildを実行します。Pull RequestからGitHub Pagesへのデプロイは行いません。

### 6.2 権限

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

| 権限 | 用途 |
| --- | --- |
| `contents: read` | リポジトリのソースコードを取得する |
| `pages: write` | GitHub Pagesへデプロイする |
| `id-token: write` | 正規のActions実行であることをOIDCトークンで証明する |

リポジトリの内容を書き換える`contents: write`は付与していません。

### 6.3 同時実行制御

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

複数のPagesデプロイが競合しないよう、同じ`pages`グループとして扱います。`cancel-in-progress: false`なので、すでに進行中のデプロイは途中で強制終了せず、後続処理を待機させます。

### 6.4 Checkout

```yaml
uses: actions/checkout@v7
```

GitHubが起動した一時的なUbuntu環境へ、対象コミットのソースコードを取得します。

### 6.5 Node.jsの準備

```yaml
uses: actions/setup-node@v7
with:
  node-version: 22
  cache: npm
```

- Node.js 22を利用する。
- npmのダウンロードキャッシュを有効にする。
- キャッシュはインストール時間を短縮するもので、`node_modules`をGit管理するものではない。

### 6.6 npm ci

```yaml
run: npm ci
```

`package-lock.json`に記録された依存関係を厳密に再現します。CIでは、依存関係を更新し得る`npm install`よりも再現性の高い`npm ci`を使用します。

`package.json`と`package-lock.json`が矛盾している場合、`npm ci`は失敗します。この挙動により、lockファイルの更新漏れを検出できます。

### 6.7 Lint

```yaml
run: npm run lint
```

ESLintでコードを検査します。警告も`--max-warnings 0`により失敗として扱います。Lintが失敗した場合、build以降へ進みません。

### 6.8 Configure Pages

```yaml
uses: actions/configure-pages@v6
```

GitHub Pagesの公開環境に必要なメタデータを準備します。リポジトリ側では、PagesのSourceを`GitHub Actions`に設定しておく必要があります。

### 6.9 Build

```yaml
run: npm run build
env:
  GITHUB_PAGES: "true"
```

Viteで本番用の`dist/`を生成します。`GITHUB_PAGES=true`により、Viteの`base`を`/portfolio-site/`へ切り替えます。

### 6.10 Artifactのアップロード

```yaml
uses: actions/upload-pages-artifact@v5
with:
  path: dist
```

`dist/`をGitHub Pages専用artifactとしてアップロードします。buildジョブとdeployジョブは別の実行環境なので、ファイルを引き渡すためにartifactが必要です。

### 6.11 Deploy

```yaml
deploy:
  needs: build
```

`needs: build`により、buildジョブが成功した場合だけdeployジョブを開始します。

```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```

GitHubの`github-pages`環境へデプロイし、Actions実行結果に公開URLを表示します。

```yaml
uses: actions/deploy-pages@v5
```

アップロード済みのPages artifactを公開します。

## 7. GitHubリポジトリ側の設定

GitHub上では次の設定へ変更済みです。

```text
Settings
  → Pages
    → Build and deployment
      → Source: GitHub Actions
```

API上の`build_type`は`workflow`です。

旧設定の`main`ブランチ・`/docs`公開へ戻すと、カスタムワークフローではなくGitHub標準の`pages build and deployment`が再び公開処理を担当します。通常は戻しません。

## 8. 導入時に実施した安全な切り替え順序

1. Actionsワークフローを追加した。
2. Viteの`base`と`package.json`を修正した。
3. ローカルでLintとGitHub Pages用ビルドを確認した。
4. `18aaa09`としてコミットし、`main`へpushした。
5. GitHub PagesのSourceを`GitHub Actions`へ変更した。
6. build・deployが成功し、新しいHTMLが`/portfolio-site/assets/...`を参照することを確認した。
7. 不要になった旧公開用`docs/`を削除した。
8. `b0eef5a`としてコミットし、再度pushした。
9. 旧公開用`docs/`削除後もbuild・deployが成功することを確認した。

## 9. 日常の更新手順

### 9.1 ローカルで確認

```bash
npm run dev
```

変更後は次を実行します。

```bash
npm run lint
npm run build
```

### 9.2 GitHubへ反映

```bash
git add <変更したファイル>
git commit -m "変更内容"
git push origin main
```

push後の`dist/`生成とGitHub Pagesへの反映はActionsが担当します。旧公開用`docs/`の作成やコミットは行いません。設計文書としての`docs/`は通常のソースと同様にGit管理します。

### 9.3 デプロイ結果の確認

1. GitHubリポジトリの`Actions`タブを開く。
2. `Deploy to GitHub Pages`を開く。
3. `build`と`deploy`の両方が緑色になっていることを確認する。
4. 公開URLを開き、主要セクション、画像、動画、CSSを確認する。

## 10. 失敗時の確認方法

### 10.1 Install dependenciesで失敗

確認点:

- `package.json`と`package-lock.json`が一致しているか。
- 依存関係追加後に`package-lock.json`もコミットしたか。
- Node.js 22で利用できるパッケージか。

ローカル確認:

```bash
npm ci
```

### 10.2 Lintで失敗

ローカルで次を実行し、表示されたファイルと行番号を修正します。

```bash
npm run lint
```

### 10.3 Buildで失敗

確認点:

- import先のファイル名と大文字・小文字が一致しているか。
- Gitへ追加していない画像がないか。
- ローカルだけに存在する絶対パスを参照していないか。

GitHub ActionsはLinux上で動くため、Windowsでは許容されるファイル名の大文字・小文字違いがエラーになる場合があります。

### 10.4 Deployで失敗

確認点:

- Settings > Pages > Sourceが`GitHub Actions`か。
- `pages: write`と`id-token: write`があるか。
- `github-pages`環境で承認待ちになっていないか。
- GitHub側でPagesやActionsの障害が発生していないか。

### 10.5 公開ページが白い

ブラウザの開発者ツールでJavaScript・CSSが404になっていないか確認します。

正しいURL:

```text
/portfolio-site/assets/...
```

誤ったURL:

```text
/assets/...
```

後者の場合は、ActionsのBuildステップに`GITHUB_PAGES=true`が渡されているか、`vite.config.js`の`base`が正しいかを確認します。

## 11. ロールバック

問題のあるコミットを打ち消して`main`へpushすると、正常な内容で自動デプロイできます。

基本方針:

```bash
git revert <問題のあるコミットID>
git push origin main
```

共有済みの`main`に対して`git reset --hard`や強制pushを行うのではなく、原則として`git revert`で履歴を残します。

GitHub Actionsの`workflow_dispatch`から、同じコミットのワークフローを手動実行することもできます。ただし、ソース自体に問題がある場合は再実行だけでは解決しません。

## 12. 現在の制約と改善候補

### 12.1 Pull Request時のCI

`.github/workflows/ci.yml`が`main`ブランチ向けのPull Requestを対象に、依存関係のインストール、lint、buildを実行します。デプロイ処理を含めないため、Pull Requestの内容が公開環境へ反映されることはありません。

### 12.2 mainブランチ保護

Pull Request運用を採用する場合は、次を検討します。

- `main`への直接pushを禁止する。
- CI成功をマージ条件にする。
- 必要に応じてレビューを必須にする。

個人開発で直接pushを続ける場合は必須ではありません。

### 12.3 大容量アセット

動画、音声、賞状画像などがビルドartifactの大部分を占めています。WebPやAVIFへの変換、画像寸法の縮小、動画圧縮により、Actionsの転送時間とサイト表示速度を改善できます。

### 12.4 Actionバージョン

現在はActionをメジャーバージョンで指定しています。より厳格な改ざん対策が必要な場合は、ActionをコミットSHAで固定し、Dependabot等で更新を管理します。

## 13. AWS移行時の変更点

AWSへ移行しても、CI部分の`npm ci`、Lint、buildは再利用できます。CD部分だけを次へ置き換えます。

```text
現在:
dist/ → GitHub Pages artifact → GitHub Pages

AWS移行後:
dist/ → S3 → CloudFront
```

主な変更点:

- `actions/upload-pages-artifact`と`actions/deploy-pages`を外す。
- GitHub Actions OIDCでAWS IAMロールを引き受ける。
- `dist/`をS3へ同期する。
- 必要に応じてCloudFront Invalidationを実行する。
- GitHub Pages用の`GITHUB_PAGES=true`を外し、Viteの`base`を`/`にする。
- AWSで正常稼働した後にGitHub Pagesを停止する。

AWS側の詳細は[03-technical-and-aws-design.md](03-technical-and-aws-design.md)を参照してください。

## 14. 関連ファイル

| ファイル | 役割 |
| --- | --- |
| `.github/workflows/ci.yml` | Pull Requestでlintとbuildを実行するCI |
| `.github/workflows/deploy-pages.yml` | GitHub Pages CI/CD本体 |
| `.nvmrc` | ローカルで使用するNode.jsメジャーバージョン |
| `vite.config.js` | 環境ごとの公開ベースパス |
| `package.json` | lint、build、postbuildコマンド |
| `package-lock.json` | CIで再現する依存関係の固定 |
| `.gitignore` | `dist/`をGit管理対象外にする |
| `README.md` | 開発者向けの簡易手順 |
| `03-technical-and-aws-design.md` | AWS移行を含む全体技術設計 |

## 15. 参考資料

- [GitHub Docs - Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Docs - Deploying with GitHub Actions](https://docs.github.com/en/actions/use-cases-and-examples/deploying/deploying-with-github-actions)
- [Vite - Deploying a Static Site / GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages)
- [npm Docs - npm-ci](https://docs.npmjs.com/cli/commands/npm-ci)
