'use strict';

module.exports = function Bitmap (data) {
  this.type = data.toString('utf-8', 0, 2);
  this.size = data.readInt32LE(2);
  this.pixelArrayStart = data.readInt32LE(10);
  this.headerSize = data.readInt32LE(14);
  this.bitsPerPixel = data.readInt32LE(28);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);

  this.colorTableStart = this.headerSize + 14;
  this.colorTable = data.toString('hex', this.colorTableStart, this.pixelArrayStart).match(/.{1,8}/g);
  this.rowWidth = Math.ceil(((this.bitsPerPixel * this.width + 31) / 32) * 4);
  this.pixelTable = data.toString('hex', this.pixelArrayStart, this.size).match(/.{1,2}/g);
  
  this.colorMap = this.pixelTable.map(function (pix) {
    return parseInt(pix);
  });
};
