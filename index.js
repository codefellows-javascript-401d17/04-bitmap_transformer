'use strict';

let Bitmap = require(`${__dirname}/model/bitmap-constructor.js`);
let ColorTransform = require(`${__dirname}/model/color-constructor.js`);
let fileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);

var transform = new ColorTransform();

module.exports = exports = {};

exports.invertBitmap = () => {

  let onRead = (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    let copied = new Buffer(data);

    bitmap.colorTable = transform.invertColors(bitmap);

    //inserts new color table
    let startToColorTable = copied.slice(0, bitmap.headerSize + 14);
    let subColorTableBuffer = new Buffer(bitmap.colorTable.join(''), 'hex');
    let colorTableToEnd = copied.slice(data.readInt32LE(10));
    let testcopy = Buffer.concat([startToColorTable, subColorTableBuffer, colorTableToEnd]);


    fileHelper.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, testcopy /*insert changed bitmap here*/, exports.writeNew);
  };

  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

exports.colorShiftBitmap = () => {

  let onRead = (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    let copied = new Buffer(data);

    bitmap.colorTable = transform.blueShift(bitmap);

    //inserts new color table
    let startToColorTable = copied.slice(0, bitmap.headerSize + 14);
    let subColorTableBuffer = new Buffer(bitmap.colorTable.join(''), 'hex');
    let colorTableToEnd = copied.slice(data.readInt32LE(10));
    let testcopy = Buffer.concat([startToColorTable, subColorTableBuffer, colorTableToEnd]);

    fileHelper.writeNew(`${__dirname}/assets/palette-shift-bitmap.bmp`, testcopy /*insert changed bitmap here*/, exports.writeNew);
  };

  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

  let onRead = (err, data) => {
exports.rotateBitmap = () => {
  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    let copied = new Buffer(data);

    bitmap.pixelTable = transform.rotateImage(bitmap);

    // inserts new pixel arr
    let startPixelTable = copied.slice(0, bitmap.pixelArrayStart);
    let pixelArrBuffer = new Buffer(bitmap.pixelTable.join(''), 'hex');
    let testcopy = Buffer.concat([startPixelTable, pixelArrBuffer]);

    fileHelper.writeNew(`${__dirname}/assets/palette-rotate-bitmap.bmp`, testcopy /*insert changed bitmap here*/, exports.writeNew);
  };

  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

exports.colorShiftBitmap();
// exports.invertBitmap();
// exports.rotateBitmap();
