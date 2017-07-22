'use strict';

let Bitmap = require(`${__dirname}/model/bitmap-constructor.js`);
let ColorTransform = require(`${__dirname}/model/color-constructor.js`);
let fileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);

const invertBitmap = () => {

  let onRead = (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    bitmap.colorTable = transform.blueShift(bitmap);
    bitmap.colorTable = transform.invertColors(bitmap);
    console.log(data);
    
    let bufferedBitmap = new Buffer(bitmap.pixelTable.join(''));
    fileHelper.writeNew(`${__dirname}/assets/palette-write-bitmap.bmp`, data /*insert changed bitmap here*/, exports.writeNew);
  };

  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

invertBitmap();
