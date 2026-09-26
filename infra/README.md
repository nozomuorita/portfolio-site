# AWSインフラストラクチャ

AWS CDK（TypeScript）を使い、ポートフォリオサイトの配信基盤を小さな単位で学びながら構築します。

## 現在の状態

AWS上の`PortfolioSiteStack`には、非公開S3からCloudFront経由でポートフォリオサイトを配信する構成を反映済みです。Reactのビルド成果物もS3へ配置し、CloudFront URLで表示を確認しています。

- S3バケット: CDKコードとAWSへ反映済み（`dist/`の内容を配置済み）
- S3のパブリックアクセス: `BlockPublicAccess.BLOCK_ALL`をCDKで明示し、AWSへ反映済み
- S3の暗号化: `BucketEncryption.S3_MANAGED`をCDKで明示し、AWSへ反映済み
- S3の通信: `enforceSSL: true`をCDKで明示し、AWSへ反映済み
- S3の削除・置換方針: `RemovalPolicy.RETAIN`をCDKで明示済み
- CloudFront: CDKで作成し、AWSへ反映済み
- OAC: CDKで作成し、AWSへ反映済み
- GitHub OIDCプロバイダー: CDKで作成し、AWSへ反映済み
- GitHub Actionsデプロイロール: `PortfolioSiteGitHubDeployRole`をAWSへ反映済み
- CDK Bootstrap: 実施済み
- `PortfolioSiteStack`: デプロイ済み（S3、バケットポリシー、CloudFront、OAC）
- CloudFront URL: <https://d2ee4b3vm96nrw.cloudfront.net>
- 現在のサイト配置方法: 手動配置済み。GitHub Actionsによる自動配置はWorkflow追加済み・初回動作確認待ち

今後の追加順序と現在位置は[LEARNING_ROADMAP.md](LEARNING_ROADMAP.md)で管理します。

## 前提

- Node.js 22
- AWS CDK
- IAM Identity Centerの`codex-admin`プロファイル
- リージョン: `ap-northeast-1`（東京）

## ローカル確認

次のコマンドはAWSリソースを作成しません。

```bash
cd infra
npm ci
npm run build
npm run synth
```

`npm run synth`は、CDKコードからCloudFormationテンプレートをローカル生成する処理です。

## AWSへ変更を加えるコマンド

以下のコマンドは、内容を理解してからサイト所有者自身が実行します。

```bash
npm run bootstrap -- aws://<AWS_ACCOUNT_ID>/ap-northeast-1 --profile codex-admin --termination-protection
npm run deploy -- --profile codex-admin
```

Codexは、明示的にAdminでの実行を依頼されない限り、これらを実行しません。
