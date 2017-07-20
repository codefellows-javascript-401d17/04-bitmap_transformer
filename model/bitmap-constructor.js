'use strict';

const fileHelper = require(`${__dirname}/../lib/bitmap-file-helper.js`);
const fs = require('fs');

// module.exports = exports = {};

const bitObj = {};

function BitConstructor(data){
  this.type = data.toString('utf-8', 0, 2);
  this.size = data.readInt32LE(2);
  this.pixelArrayStart = data.readInt32LE(10);
  this.headerSize = data.readInt32LE(14);
  this.bitsPerPixel = data.readInt32LE(28);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  // this.maxColorNum = data.readInt32LE(46);
  this.colorTableStart = this.headerSize + 14;
  this.colorTable = data.toString('hex', this.colorTableStart, this.pixelArrayStart);

  this.rowWidth = Math.ceil(((this.bitsPerPixel * this.width + 31)/32) * 4);

  this.buffer = data.toString('hex', 1078, this.size);
}

fileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
  if(err) throw err;
  bitObj.thingOne = new BitConstructor(data);
  console.log(bitObj);
  return data;
});
