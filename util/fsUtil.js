const fs = require('fs');
const path = require('path');
const moment = require('moment');

exports.makeDirIfNotExist = (dir, recursive = true) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive }); // creates storage directory if it doesn't yet exist 
  }
}

exports.saveFileNoConflict = (file, dir, counter = 0) => {
  let newFileName = changeFileName(file.name, counter);
  file.mv(path.join(dir, newFileName), (err) => {
    if (err) {
      console.error("Error saving image");
      console.error(err);
    }
  })
  return {
    imagename: newFileName,
    imagepath: dir
  };
}

function changeFileName(filename) {
  let splits = filename.split('.');
  splits.splice(-1, 0, moment().valueOf());
  return splits.join('.');
}