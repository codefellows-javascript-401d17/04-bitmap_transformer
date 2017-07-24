'use strict';

const bitmapFileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);
const bitmapConstructor = require(`${__dirname}/model/bitmap-constructor.js`);
const greyScaleTransform = require(`${__dirname}/lib/grey-scale-transform.js`);
const reverseTransform = require(`${__dirname}/lib/reverse-transform.js`);
const invertTransform = require(`${__dirname}/lib/invert-transform.js`);
const infraredTransform = require(`${__dirname}/lib/infrared-transform.js`);


bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  let bmp = new bitmapConstructor.Bitmap(data);

  bmp.colorArr = greyScaleTransform(bmp.colorArr);
  bmp.newFile('greyscaled');
});

bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  let bmp = new bitmapConstructor.Bitmap(data);

  bmp.pixelArr = reverseTransform(bmp.pixelArr);
  bmp.newFile('reversed');
});


bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  let bmp = new bitmapConstructor.Bitmap(data);

  bmp.colorArr = invertTransform(bmp.colorArr);
  bmp.newFile('inverted');
});

bitmapFileHelper(`${__dirname}/assets/palette-bitmap.bmp`, function(err, data) {
  if(err) throw err;
  let bmp = new bitmapConstructor.Bitmap(data);

  bmp.colorArr = infraredTransform(bmp.colorArr);
  bmp.newFile('infrared');
});
