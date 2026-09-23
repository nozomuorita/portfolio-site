# AWSインフラストラクチャ

AWS CDK（TypeScript）で、ポートフォリオサイトの配信基盤を管理します。

## 構成

- 非公開Amazon S3バケット
- Amazon CloudFront
- Origin Access Control（OAC）
- HTTPからHTTPSへのリダイレクト
- Brotli/Gzip圧縮

独自ドメイン、ACM証明書、Route 53、Contact APIは初期構成に含めません。

## 前提

- Node.js 22
- AWSアカウント
- AWS認証情報
- 初回デプロイ前に対象アカウント・リージョンでCDK Bootstrapを実行すること

## ローカル確認

```bash
cd infra
npm install
npm run build
npm run synth
```

初回の`npm install`で`package-lock.json`を生成し、以後は`npm ci`を使用します。lockファイルはGitで管理します。

## 初回デプロイ

```bash
cd infra
npx cdk bootstrap aws://<AWS_ACCOUNT_ID>/ap-northeast-1
npm run deploy
```

スタック削除時もS3バケットは保持されます。不要になったバケットとオブジェクトを削除する場合は、対象を確認して別途明示的に操作します。
