# ポートフォリオサイト開発ドキュメント

最終更新日: 2026-09-27
対象リポジトリ: `nozomuorita/portfolio-site`

## 1. この文書群の目的

本ディレクトリは、NOZOMU ORITAのポートフォリオサイトについて、目的・仕様・実装・AWS構成・デプロイ・テスト・運用方法を一貫して把握できるようにするための開発文書です。

個人サイトのため、発注者と開発者の契約文書としての要件定義は必須ではありません。ただし、一般的なシステム開発の流れを学び、将来の変更で判断理由を失わないことを目的に、実務に近い文書体系を採用しています。

## 2. 文書一覧

| 文書 | 役割 | 主な内容 |
| --- | --- | --- |
| [01-requirements-definition.md](01-requirements-definition.md) | 要件定義書 | サイトの目的、対象範囲、機能・非機能要件、受入条件 |
| [02-basic-design.md](02-basic-design.md) | 基本設計書 | 全体構成、画面・セクション、外部インターフェース、方式設計 |
| [03-detailed-design.md](03-detailed-design.md) | 詳細設計書 | Reactコンポーネント、データ、動作、ビルド、技術上の注意点 |
| [04-aws-architecture.md](04-aws-architecture.md) | AWS構成設計書 | S3、CloudFront、OAC、IAM、CDK、セキュリティ |
| [05-cicd-and-deployment.md](05-cicd-and-deployment.md) | CI/CD・デプロイ設計書 | PR検証、GitHub Pages、AWS自動デプロイ、切戻し |
| [06-test-specification.md](06-test-specification.md) | テスト仕様書 | テスト方針、確認環境、テストケース、記録方法 |
| [07-operation-guide.md](07-operation-guide.md) | 運用手順書 | 更新、監視、障害対応、AWS操作、定期確認 |

構成図は次の2点です。

- [diagrams/aws-architecture.svg](diagrams/aws-architecture.svg): 現行AWS配信基盤と管理経路
- [diagrams/cicd-flow.svg](diagrams/cicd-flow.svg): Pull Requestおよび`main`更新時のCI/CDフロー

## 3. 文書の読み順

1. 要件定義書で「何を実現するか」を確認する。
2. 基本設計書で「どのような構成・画面にするか」を確認する。
3. 詳細設計書で「コード上でどう実現しているか」を確認する。
4. AWS構成設計書とCI/CD設計書で「どこへ、どう公開するか」を確認する。
5. テスト仕様書と運用手順書で「どう品質を確認し、維持するか」を確認する。

## 4. 現状の要約

| 項目 | 現状 |
| --- | --- |
| アプリケーション | React 18 + Vite 4による1ページ構成の静的サイト |
| Node.js | 22系 |
| ソース管理 | GitHub |
| PR時のCI | lint・本番ビルドをGitHub Actionsで実行 |
| GitHub Pages | `main`へのpushで自動公開 |
| AWS | 非公開S3 + CloudFront + OACをCDKで構築済み |
| AWSへの公開 | `main`へのpushでGitHub Actionsから自動デプロイ済み |
| AWS認証 | GitHub OIDCから専用IAMロールを一時的に引き受ける方式 |
| 公開方式 | 移行確認のためGitHub PagesとAWSを併用中 |
| 独自ドメイン | 未導入 |
| Contact送信機能 | 未実装。画面にも`Not working`と表示 |

## 5. 状態表記

| 状態 | 意味 |
| --- | --- |
| 実装済み | コード、デプロイログ、または画面確認で実現を確認済み |
| 一部実装 | 基本動作はあるが、要件の一部が不足 |
| 暫定 | 移行期間または仮設定として利用中 |
| 未実装 | 要件・候補として記載しているが実装されていない |
| 将来検討 | 必要性を再評価してから着手する項目 |

## 6. 更新ルール

- 要件を変更した場合は、まず要件定義書を更新し、関連する設計・テストへ反映する。
- Reactコンポーネントや画面構造を変えた場合は、基本設計書と詳細設計書を更新する。
- CDKまたはAWSリソースを変えた場合は、AWS構成設計書、構成図、運用手順書を更新する。
- GitHub Actionsを変えた場合は、CI/CD設計書とCI/CD構成図を更新する。
- 実装と文書が食い違う場合は、稼働中の実装を事実として記録し、意図した仕様との差を課題として残す。

## 7. 根拠と参照先

本書群は、2026-09-27時点のリポジトリ内ソース、GitHub Actions、AWS CDKコード、実行ログおよびマネジメントコンソールでの確認結果を基準に作成しています。サービス固有の設計根拠は各文書末尾の公式資料を参照してください。
