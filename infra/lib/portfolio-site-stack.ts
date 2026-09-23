import {
  CfnOutput,
  RemovalPolicy,
  Stack,
  StackProps,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as origins,
  aws_s3 as s3,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class PortfolioSiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      removalPolicy: RemovalPolicy.RETAIN,
      versioned: false,
    });

    const siteOrigin = origins.S3BucketOrigin.withOriginAccessControl(
      siteBucket,
    );

    const distribution = new cloudfront.Distribution(
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
        httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
        priceClass: cloudfront.PriceClass.PRICE_CLASS_200,
      },
    );

    new CfnOutput(this, 'SiteBucketName', {
      description: 'S3 bucket that stores the built website',
      value: siteBucket.bucketName,
    });

    new CfnOutput(this, 'DistributionId', {
      description: 'CloudFront distribution ID used for cache invalidation',
      value: distribution.distributionId,
    });

    new CfnOutput(this, 'DistributionDomainName', {
      description: 'CloudFront domain used before configuring a custom domain',
      value: distribution.distributionDomainName,
    });
  }
}
