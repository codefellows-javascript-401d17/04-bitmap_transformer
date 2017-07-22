'use strict';

module.exports = exports = {};

exports.Bitmap = function(data) {
  // this.all = data.toString('hex');

  this.filetype = data.toString('hex', 0, 2);
  this.offsetToPixelArr = data.readInt32LE(10);

  this.infoHeader = data.readInt32LE(14);
  this.offsetToColorArr = this.infoHeader + 14;

  this.colorArr = data.toString('hex', this.offsetToColorArr, 182);
  this.pixelArr = data.toString('hex', this.offsetToPixelArr);
};
