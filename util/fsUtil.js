const fs = require('fs');
const path = require('path');
const moment = require('moment');

exports.makeDirIfNotExist = (dir, recursive = true) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive }); // creates storage directory if it doesn't yet exist 
  }
}

exports.saveFileNoConflict = (file, dir) => {
  let newFileName = changeFileName(file.name, moment().valueOf());
  file.mv(path.join(dir, newFileName), (err) => {
    if (err) {
      console.error("Error saving image");
      console.error(err);
    }
  });
  setReadOnly(path.join(dir, newFileName));
  return {
    imagename: newFileName,
    imagepath: dir
  };
}

function setReadOnly(filepath) {
  fs.chmodSync(filepath, 0o444, err => {
    if (err) throw err;
    console.log("File permission change succcessful");
  });
}

function changeFileName(filename, suffix) {
  let splits = filename.split('.');
  splits.splice(-1, 0, suffix);
  return splits.join('.');
}