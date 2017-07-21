'use strict';

const fs = require('fs');
const bitmapConstructor = require(`${__dirname}/../model/bitmap-constructor.js`);

const bitmapFileHelper = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    return callback(null, data);
  });
};

// This will be called in index.js
bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  var bmp = new bitmapConstructor.Bitmap(data);
});
