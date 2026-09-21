# NOZOMU ORITA Portfolio

React と Vite で構築した、1ページ構成のポートフォリオサイトです。

## ローカル起動

```bash
npm install
npm run dev
```

## 品質確認

```bash
npm run lint
npm run build
```

## デプロイ

`main`ブランチへpushすると、GitHub Actionsが依存関係のインストール、lint、本番ビルドを実行し、`dist/`をGitHub Pagesへ公開します。ローカルで`dist/`を`docs/`へコピーする必要はありません。

初回のみ、GitHubリポジトリの **Settings > Pages > Build and deployment > Source** を **GitHub Actions** に変更してください。

## ドキュメント

開発方針、要件、画面仕様、AWSへのデプロイ構成は [documentation/README.md](documentation/README.md) を参照してください。
