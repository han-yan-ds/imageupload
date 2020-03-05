const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);
const {saveDir} = require('../server');
const fsUtil = require('../util/fsUtil');

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
  if (files && files['fileKey']) {
    let file = files['fileKey'];
    cb(fsUtil.saveFileNoConflict(file, saveDir));
  } else { // handle null
    throw('No file uploaded: No file selected?');
  }
}