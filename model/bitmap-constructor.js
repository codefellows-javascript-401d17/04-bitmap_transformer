'use strict';

const fs = require('fs');

//Gets bitmap data and put into construtor
const Bitmap = module.exports = function(data) {
  this.data = data;
  this.id = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.height = data.readUInt32LE(18);
  this.width = data.readUInt32LE(22);
  this.pixelOffSet = data.readUInt32LE(10);
  this.colorArray = data.readUInt32LE(54, this.pixelOffSet);
};

//blackout
Bitmap.prototype.blackOut = function() {
  this.colorArray.fill(0);
};

//reverse
Bitmap.prototype.reversed = function() {
  this.pixelOffSet.reverse();
};




