'use strict';

const fs = require('fs');

const bitmapFileHelper = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    return callback(null, data);
  });
};
//
// // GREYSCALE: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//   bmp.colorArr = greyScaleTransform(bmp.colorArr);
//
//   bmp.newFile('greyscaled');
// });
//
// // REVERSE: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//
//   bmp.pixelArr = reverseTransform(bmp.pixelArr);
//
//   bmp.newFile('reversed');
// });
//
// // INVERT: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//   // console.log('colorArr:', bmp.colorArr.length);
//
//   bmp.colorArr = invertTransform(bmp.colorArr);
//
//   bmp.newFile('inverted');
// });
//
