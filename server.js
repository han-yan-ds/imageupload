const port = 8080;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// storage directory
const fs = require('fs');
exports.saveDir = path.join(__dirname, 'storage');

if (!fs.existsSync(this.saveDir)) {
  fs.mkdirSync(this.saveDir);
}

const {
  postImageMetadataController, postImageController
} = require('./controllers/postController');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));
app.use(fileUpload());

app.post('/images', postImageMetadataController)
app.post('/saveImage', postImageController)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`App is ready at localhost:${port}`);
});