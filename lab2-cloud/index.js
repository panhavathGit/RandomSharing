const AWS = require('aws-sdk');
const { downloadFile } = require('./utils/download_file.js');
const { uploadFile } = require('./utils/upload_file.js');
const { deleteFile } = require('./utils/delete_file.js');

require('dotenv').config();

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

// Call the deleteFile function
// uploadFile('file path', 'bucket name');
// downloadFile('file path', 'bucket name');
// deleteFile('file path', 'bucket name');

//Put this in your env
// AWS_ACCESS_KEY_ID=
// AWS_SECRET_ACCESS_KEY=
// AWS_REGION=