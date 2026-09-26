import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PortfolioSiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    // Step 7: OACを使い、非公開S3のコンテンツをCloudFrontからだけ配信します。
    const siteOrigin = origins.S3BucketOrigin.withOriginAccessControl(
      siteBucket,
    );

    const siteDistribution = new cloudfront.Distribution(
      this,
      'SiteDistribution',
      {
        defaultRootObject: 'index.html',
        defaultBehavior: {
          origin: siteOrigin,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
          compress: true,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      },
    );

    // Step 9a: GitHub ActionsがAWSへOIDC認証するためのプロバイダーです。
    const githubOidcProvider = new iam.CfnOIDCProvider(
      this,
      'GitHubOidcProvider',
      {
        url: 'https://token.actions.githubusercontent.com',
        clientIdList: ['sts.amazonaws.com'],
      },
    );

    // Step 9b: このリポジトリのmainブランチだけが使用できるデプロイロールです。
    const githubDeployRole = new iam.Role(this, 'GitHubDeployRole', {
      roleName: 'PortfolioSiteGitHubDeployRole',
      description:
        'Deploys the portfolio site from the GitHub Actions main branch workflow',
      assumedBy: new iam.WebIdentityPrincipal(githubOidcProvider.attrArn, {
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
          'token.actions.githubusercontent.com:sub':
            'repo:nozomuorita/portfolio-site:ref:refs/heads/main',
        },
      }),
    });

    githubDeployRole.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          's3:GetBucketLocation',
          's3:ListBucket',
          's3:ListBucketMultipartUploads',
        ],
        resources: [siteBucket.bucketArn],
      }),
    );

    githubDeployRole.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          's3:AbortMultipartUpload',
          's3:DeleteObject',
          's3:GetObject',
          's3:ListMultipartUploadParts',
          's3:PutObject',
        ],
        resources: [siteBucket.arnForObjects('*')],
      }),
    );

    githubDeployRole.addToPolicy(
      new iam.PolicyStatement({
        actions: ['cloudfront:CreateInvalidation'],
        resources: [siteDistribution.distributionArn],
      }),
    );

    new CfnOutput(this, 'GitHubDeployRoleArn', {
      description: 'IAM role assumed by the GitHub Actions deployment workflow',
      value: githubDeployRole.roleArn,
    });
  }
}
