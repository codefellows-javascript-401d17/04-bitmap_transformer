'use strict';

let Bitmap = require(`${__dirname}/model/bitmap-constructor.js`);
let ColorTransform = require(`${__dirname}/model/color-constructor.js`);
let fileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);

var transform = new ColorTransform();

const invertBitmap = () => {
  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    bitmap.colorTable = transform.invertColors(bitmap);

    fileHelper.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, bitmap);
  });
};

const rotateBitmap = () => {
  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    bitmap.pixelTable = transform.rotateImage(bitmap);

    console.log('rotated bitmap', bitmap);

    fileHelper.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, bitmap);
  });
};

// invertBitmap();
rotateBitmap();
