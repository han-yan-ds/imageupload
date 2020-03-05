const {postImageMetadata, postImage} = require('../models/postModel');

exports.postImageController = async (req, res) => {
  await postImage(req.files, (metadata) => 
    postImageMetadata(metadata, ([imageId]) => 
      res.send({...metadata, imageId})
    )
  );
}