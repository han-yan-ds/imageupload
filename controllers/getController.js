const {getImageModel, getImageMetadataModel} = require('../models/getModel');
const path = require('path');

exports.getImageController = async (req, res) => {
  const {imageId} = req.body;
  await getImageMetadataModel(imageId, (data) => {
    try {
      res.sendFile(path.join(imagepath, imagename));
    } catch (err) {
      throw(err);
    }
  });
}
