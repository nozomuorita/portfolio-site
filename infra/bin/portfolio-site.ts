#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PortfolioSiteStack } from '../lib/portfolio-site-stack';

const app = new cdk.App();

new PortfolioSiteStack(app, 'PortfolioSiteStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ?? 'ap-northeast-1',
  },
  description: 'Private S3 and CloudFront hosting for the portfolio site',
});

cdk.Tags.of(app).add('Project', 'portfolio-site');
cdk.Tags.of(app).add('ManagedBy', 'AWS-CDK');
