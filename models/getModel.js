const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);

exports.getImageMetadataModel = async (imageid, cb = data => data) => {
  try {
    const results = await knex('images').where({imageid});
    if (results.length > 0) {
      cb(results[0])
    } else {
      throw Error('Couldn\'t find an image with this ID');
    }
  } catch (err) {
    console.error("Error grabbing image by ID from database");
    console.error(err);
  }
}