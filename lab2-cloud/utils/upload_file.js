const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Initialize S3
const s3 = new AWS.S3();

const uploadFile = (fileName, bucketName) => {
    const fileContent = fs.readFileSync(path.resolve(fileName));

    const params = {
        Bucket: bucketName,
        Key: path.basename(fileName),
        Body: fileContent
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error("Error uploading file:", err);
        } else {
            console.log(`File uploaded successfully at ${data.Location}`);
        }
    });
};

module.exports = { uploadFile };