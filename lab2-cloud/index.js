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

uploadFile('C:/Users/U-ser/Downloads/testS3.txt', 'myfirstbucketvath');
// downloadFile("file1.txt","myfirstbucketvath");
// deleteFile( "file1.txt","myfirstbucketvath" );

// Call the deleteFile function
// uploadFile('file path', 'bucket name');
downloadFile('aws_test.txt', 'myfirstbucketvath');
// deleteFile('file path', 'bucket name');

