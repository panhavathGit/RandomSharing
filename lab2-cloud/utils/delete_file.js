const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Initialize S3
const s3 = new AWS.S3();

const deleteFile = (fileName, bucketName) => {
    const params = {
        Bucket: bucketName,
        Key: fileName
    };

    s3.deleteObject(params, (err, data) => {
        if (err) {
            console.error("Error deleting file:", err);
        } else {
            console.log(`${fileName} has been deleted successfully`);
        }
    });
};

module.exports = { deleteFile };