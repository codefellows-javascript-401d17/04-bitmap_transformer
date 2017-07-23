'use strict';

module.exports = exports = {};

const fs = require('fs');

exports.Bitmap = function(data) {
  this.all = data.toString('hex');

  this.filetype = data.toString('hex', 0, 2);
  this.offsetToPixelArrInHex = data.toString('hex', 10, 14);
  this.offsetToPixelArr = data.readInt32LE(10);

  this.offsetToColorArr = this.infoHeader + 14;

  // full file:
  this.headerAll = data.toString('hex', 0, this.offsetToColorArr);
  this.colorArr = data.toString('hex', this.offsetToColorArr, 182);
  this.pixelArr = data.toString('hex', this.offsetToPixelArr);
};

// exports.Bitmap.prototype.newFile = function(fileName) {
//   let newBuffer = new Buffer(this.headerAll + this.colorArr + this.pixelArr);
//
//   console.log('newbuffer:', newBuffer);
//
//   fs.writeFile(`./assets/${fileName}.bmp`, newBuffer, (err) => {
//     if(err) console.error(err);
//     console.log(`${fileName}.bmp initiated`);
//   });
// };
