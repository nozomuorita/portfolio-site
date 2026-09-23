# NOZOMU ORITA Portfolio

React と Vite で構築した、1ページ構成のポートフォリオサイトです。

## ローカル起動

Node.js 22を使用します。

```bash
npm ci
npm run dev
```

## 品質確認

```bash
npm run lint
npm run build
```

## デプロイ

`main`ブランチへpushすると、GitHub Actionsが依存関係のインストール、lint、本番ビルドを実行し、`dist/`をGitHub Pagesへ公開します。ローカルで`dist/`を旧公開用`docs/`へコピーする必要はありません。現在の`docs/`は設計文書専用です。

`main`ブランチ向けのPull Requestでは、GitHub Actionsが`npm ci`、lint、buildを実行します。AWSへのデプロイは、AWS環境の構築後に別ワークフローとして追加します。

初回のみ、GitHubリポジトリの **Settings > Pages > Build and deployment > Source** を **GitHub Actions** に変更してください。

## AWSインフラストラクチャ

AWS配信基盤は`infra/`でAWS CDK（TypeScript）として管理します。現在は非公開S3、CloudFront、OACの最小構成を定義しており、AWSへはまだデプロイしていません。詳細は[infra/README.md](infra/README.md)を参照してください。

## ドキュメント

開発方針、要件、画面仕様、AWSへのデプロイ構成は [docs/README.md](docs/README.md) を参照してください。
