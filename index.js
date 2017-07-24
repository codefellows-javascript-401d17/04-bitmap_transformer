'use strict';

const bitmapFileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);
const bitmapConstructor = require(`${__dirname}/model/bitmap-constructor.js`);
const greyScaleTransform = require(`${__dirname}/lib/grey-scale-transform.js`);
const reverseTransform = require(`${__dirname}/lib/reverse-transform.js`);
const invertTransform = require(`${__dirname}/lib/invert-transform.js`);

// GREYSCALE: This will be called in index.js
bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  var bmp = new bitmapConstructor.Bitmap(data);
  bmp.colorArr = greyScaleTransform(bmp.colorArr);

  bmp.newFile('greyscaled');
});

// REVERSE: This will be called in index.js
bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  var bmp = new bitmapConstructor.Bitmap(data);

  bmp.pixelArr = reverseTransform(bmp.pixelArr);

  bmp.newFile('reversed');
});

// INVERT: This will be called in index.js
bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  var bmp = new bitmapConstructor.Bitmap(data);
  // console.log('colorArr:', bmp.colorArr.length);

  bmp.colorArr = invertTransform(bmp.colorArr);

  bmp.newFile('inverted');
});

