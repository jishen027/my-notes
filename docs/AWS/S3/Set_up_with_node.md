# Set up S3 with Node.js

1. **Create Bucket**

2. **Create Policy for the web app user**
    - **Server**: S3
        - **Read**: `GetObject`
        - **Write**: `PutObject`, `DeleteObject`
    - **Resources**:
        - The name of the bucket for the web app

3. **Create IAM account user for the web app**
    - Create a user representing the web application (Access Key - Programmatic access).
    - Copy the access key and secret key.

4. **Install AWS SDK for node app**

5. **Setup S3 client in the project**

    ```javascript
    // Init S3 client
    const s3 = new S3Client({
        credentials: {
            accessKeyId: accessKey,
            secretAccessKey: secretAccessKey,
        },
        region: bucketRegion
    });

    // Create a post with single image upload to S3 bucket
    app.post('/posts', upload.single('image'), async (req, res) => {
        const params = {
            Bucket: bucketName,
            Key: req.file.originalname,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        };

        const command = new PutObjectCommand(params);

        try {
            const result = await s3.send(command);
            res.json({ success: true, message: 'Image uploaded successfully' });
        } catch (error) {
            console.error('Error uploading image:', error);
            res.status(500).json({ success: false, error: 'Failed to upload image' });
        }
    });


    ```

    