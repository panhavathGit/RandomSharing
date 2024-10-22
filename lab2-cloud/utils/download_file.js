const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Initialize S3
const s3 = new AWS.S3();

const downloadFile = (fileName, bucketName) => {
    const params = {
        Bucket: bucketName,
        Key: fileName
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            console.error("Error downloading file:", err);
        } else {
            fs.writeFileSync(path.resolve(fileName), data.Body);
            console.log(`${fileName} has been downloaded successfully`);
        }
    });
};

module.exports = { downloadFile };