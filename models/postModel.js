const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);

exports.postImageMetadata = async (body, cb = data => data) => {
  const {imagename, imagepath} = body;
  try {
    cb(await knex('images').insert({
      imagename, imagepath
    }).returning('imageid'));
    /**
     * Body would have imagename, imagepath
     * AND return imageid
     */
  } catch(err) {
    console.error("Error posting image");
    console.error(err);
  }
}

exports.postImage = (files, cb = data => data) => {
  let file = files['filename'];
  console.log(file);
  cb(file);
}