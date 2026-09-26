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

`main`ブランチへpushすると、GitHub Actionsが依存関係のインストール、lint、本番ビルドを実行します。現在は移行確認期間のため、GitHub Pagesへの公開と、AWSのS3・CloudFrontへの公開を別Workflowで実行します。AWS側の初回自動デプロイ確認後にGitHub Pagesを停止します。

`main`ブランチ向けのPull Requestでは、GitHub Actionsが`npm ci`、lint、buildだけを実行し、AWSへはデプロイしません。ビルド成果物を旧公開用`docs/`へコピーする必要はなく、現在の`docs/`は設計文書専用です。

初回のみ、GitHubリポジトリの **Settings > Pages > Build and deployment > Source** を **GitHub Actions** に変更してください。

## AWSインフラストラクチャ

AWS配信基盤は`infra/`でAWS CDK（TypeScript）として管理します。非公開S3、CloudFront、OAC、GitHub OIDCプロバイダー、デプロイ専用IAMロールを構築済みです。詳細は[infra/README.md](infra/README.md)、現在位置と次の作業は[infra/LEARNING_ROADMAP.md](infra/LEARNING_ROADMAP.md)を参照してください。

## ドキュメント

開発方針、要件、画面仕様、AWSへのデプロイ構成は [docs/README.md](docs/README.md) を参照してください。
