# Amplify

## Error: Cannot update data model when using Amplify Studio

**Issue**: Clicking deploy shows success but no changes are made.

**Solution**: Remove the `deployment-status.json` file from the S3 bucket, then redeploy the app.