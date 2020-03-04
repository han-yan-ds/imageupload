const port = 8080;
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {postImageMetadataController} = require('./controllers/postController');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));

app.post('/images', postImageMetadataController)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`App is ready at localhost:${port}`);
});