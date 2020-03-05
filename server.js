const port = 8080;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

// storage directory
// const fs = require('fs');
const fsUtil = require('./util/fsUtil');
exports.saveDir = path.join(__dirname, 'storage');
fsUtil.makeDirIfNotExist(this.saveDir);

// controllers
const {getImageController} = require('./controllers/getController');
const {postImageController} = require('./controllers/postController');

// apply middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));
app.use(fileUpload());

// routes
app.post('/saveImage', postImageController);
app.get('/downloadImage', getImageController);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start server
app.listen(port, () => {
  console.log(`App is ready at localhost:${port}`);
});