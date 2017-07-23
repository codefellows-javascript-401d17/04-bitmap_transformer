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
bitmapFileHelper(`${__dirname}/../assets/sup.bmp`, function(err, data) {
  if(err) throw err;
  var bmp = new bitmapConstructor.Bitmap(data);
  // bmp.colorArr = greyScaleTransform(bmp.colorArr);
  console.log('bmp:', bmp);
  console.log('sup:', data.toString('hex', 0, 2));

  // function newFile(fileName) {
  //   console.log('headerall:', bmp.headerAll);
  //
  //   let newBuffer = new Buffer(bmp.headerAll + bmp.colorArr + bmp.pixelArr);
  //   console.log('buffer:', newBuffer);
  //   // newBuffer = newBuffer.readUInt8();
  //   // console.log('new:', newBuffer);
  //
  //   fs.writeFile(`${__dirname}/../assets/${fileName}.bmp`, newBuffer, (err) => {
  //     if(err) console.error(err);
  //     console.log(`${fileName}.bmp initiated`);
  //   });
  // }

  // newFile('sup');
});

  // bitmapConstructor.Bitmap.newFile('greyscale');


// // REVERSE: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//   reverseTransform(bmp.pixelArr);
// });
//
// // INVERT: This will be called in index.js
// bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
//   var bmp = new bitmapConstructor.Bitmap(data);
//   invertTransform(bmp.colorArr);
// });

