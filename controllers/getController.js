const {getImageMetadataModel} = require('../models/getModel');
const path = require('path');

exports.getImageController = async (req, res) => {
  const imageId = Number(req.params.imageId);
  if (Number.isNaN(imageId)) throw Error('imageId parameter can only be a number')
  await getImageMetadataModel(imageId, (data) => {
    try {
      const {imageid, imagename, imagepath} = data;
      res.sendFile(path.join(imagepath, imagename));
    } catch (err) {
      throw(err);
    }
  });
}
