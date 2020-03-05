const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);
const path = require('path');
const saveDir = path.join(__dirname, '..', 'storage')

exports.postImageMetadata = async (body, cb = data => data) => {
  const {imagename, imagepath} = body;
  try {
    cb(await knex('images').insert({
      imagename, imagepath
    }).returning('imageid'));
  } catch(err) {
    console.error("Error posting image");
    console.error(err);
  }
}

exports.postImage = (files, cb = data => data) => {
  let file = files['fileKey'];
  file.mv(path.join(saveDir, file.name), (err) => {
    if (err) {
      console.error("Error saving image");
      console.error(err);
    }
  });
  cb(files);
}