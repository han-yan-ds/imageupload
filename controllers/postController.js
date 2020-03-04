const {postImageMetadata} = require('../models/postModel');

exports.postImageMetadataController = async (req, res) => {
  await postImageMetadata(req.body, (data) => res.json(data));
}