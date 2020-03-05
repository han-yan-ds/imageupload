const {postImageMetadata, postImage} = require('../models/postModel');

exports.postImageMetadataController = async (req, res) => {
  await postImageMetadata(req.body, (data) => res.json(data));
}

exports.postImageController = async (req, res) => {
  await postImage(req.files, (data) => res.send(data));
}