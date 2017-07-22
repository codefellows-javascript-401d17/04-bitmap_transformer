'use strict';

const fs = require('fs');
const bitmapConstructor = require(`${__dirname}/../model/bitmap-constructor.js`);
const greyScaleTransform = require(`${__dirname}/../lib/grey-scale-transform.js`);
const reverseTransform = require(`${__dirname}/../lib/reverse-transform.js`);
const invertTransform = require(`${__dirname}/../lib/invert-transform.js`)

const bitmapFileHelper = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    return callback(null, data);
  });
};

// GREYSCALE: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//   greyScaleTransform(bmp.colorArr);
// });

// REVERSE: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//   console.log('normal:', bmp.pixelArr);
//   console.log('reverse:', reverseTransform(bmp.pixelArr));
// });

// INVERT: This will be called in index.js
bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  var bmp = new bitmapConstructor.Bitmap(data);
  console.log('normal:', bmp.colorArr);
  console.log('invert:', invertTransform(bmp.colorArr));
});

