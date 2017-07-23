'use strict';

let Bitmap = require(`${__dirname}/model/bitmap-constructor.js`);
let ColorTransform = require(`${__dirname}/model/color-constructor.js`);
let fileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);

var transform = new ColorTransform();

const invertBitmap = () => {

  let onRead = (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    // bitmap.colorTable = transform.blueShift(bitmap);
    bitmap.colorTable = transform.invertColors(bitmap);
    // let copiedData = data.copy();
    let copied = new Buffer(data);

    //inserts new color table
    let startToColorTable = copied.slice(0, bitmap.headerSize + 14);
    console.log(bitmap.headerSize);
    let subColorTableBuffer = new Buffer(bitmap.colorTable.join(''), 'hex');
    let colorTableToEnd = copied.slice(data.readInt32LE(10));
    let testcopy = Buffer.concat([startToColorTable, subColorTableBuffer, colorTableToEnd]);


    fileHelper.writeNew(`${__dirname}/assets/palette-write-bitmap.bmp`, testcopy /*insert changed bitmap here*/, exports.writeNew);
  };

  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

const colorShiftBitmap = () => {

  let onRead = (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    bitmap.colorTable = transform.blueShift(bitmap);
    // bitmap.colorTable = transform.invertColors(bitmap);
    // let copiedData = data.copy();
    let copied = new Buffer(data);

    //inserts new color table
    let startToColorTable = copied.slice(0, bitmap.headerSize + 14);
    console.log(bitmap.headerSize);
    let subColorTableBuffer = new Buffer(bitmap.colorTable.join(''), 'hex');
    let colorTableToEnd = copied.slice(data.readInt32LE(10));
    let testcopy = Buffer.concat([startToColorTable, subColorTableBuffer, colorTableToEnd]);


    fileHelper.writeNew(`${__dirname}/assets/palette-write-bitmap.bmp`, testcopy /*insert changed bitmap here*/, exports.writeNew);
  };

  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

const rotateBitmap = () => {
  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    bitmap.pixelTable = transform.rotateImage(bitmap);

    console.log('rotated bitmap', bitmap);

    fileHelper.writeNew(`${__dirname}/assets/palette-write-bitmap.bmp`, testcopy /*insert changed bitmap here*/, exports.writeNew);
  });
};

colorShiftBitmap();
// invertBitmap();
// rotateBitmap();
