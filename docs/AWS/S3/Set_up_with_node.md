# Set up S3 with Node.js

1. Create Bucket

2. Create Police for the web app user
    - server : S3
        - read: GetObject
        - write: PutObject, DeleteObject
    - resources:
        - the name of the bucket for the web app

3. Create IAM account user for the web app
    - create a user represent for the web application. (Access Key - Programmatic access)
    - Copy the access key and secret key

4. install AWS SDK for node app

5. setup S3 client in the project

    ```js
    // init S3 client
    const s3 = S3Client({
        credentials:{
            accessKeyId : accessKey,
            secretAeecssKey: secretAccessKey,
        },
        region: bucketRegion
    });

    // create a post with single image upload to s3 bucket
    app.post('/posts', upload.single('image'), asnc(req, res)=>{
        const params = {
            Bucket: bucketName,
            Key: req.file.originalName,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        }

        const command = new PutObjectCommand(params)

        try{
            const result = await s3.send(command)
            const s3Json = await 
        }

        res.json({

        })

    })


    ```

    