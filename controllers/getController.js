const {getImageModel, getImageMetadataModel} = require('../models/getModel');
const path = require('path');

exports.getImageController = async (req, res) => {
  const {imageId} = req.body;
  await getImageMetadataModel(imageId, ([data]) => {
    try {
      const {imageid, imagename, imagepath} = data;
      // this part SHOULD call getImageModel to grab the actual image from a path
      const location = path.join(imagepath, imagename);
      console.log(location);
      res.send(location);
    } catch (err) {
      throw(err);
      throw('Couldn\'t find an image with this ID');
    }
  });
}