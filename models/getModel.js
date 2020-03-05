const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);

exports.getImageMetadataModel = async (imageid, cb = data => data) => {
  try {
    cb(await knex('images').where({
      imageid
    }));
  } catch (err) {
    console.error("Error grabbing image by ID from database");
    console.error(err);
  }
}

exports.getImageModel = () => {}