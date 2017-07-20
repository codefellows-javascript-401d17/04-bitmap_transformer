'use strict';

const fs = require('fs');

const initFile = module.exports = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if(err) return callback(err);
    return callback(null, data);
  });
};

// initFile(`${__dirname}/../assets/palette-bitmap.bmp`);
