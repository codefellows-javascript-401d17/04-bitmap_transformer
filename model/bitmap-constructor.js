'use strict';

const fileHelper = require(`${__dirname}/../lib/bitmap-file-helper.js`);
const fs = require('fs');

// module.exports = exports = {};

const bitObj = {};

function BitConstructor(data){
  this.type = data.toString('utf-8', 0, 2);
  this.size = data.readInt32LE(2);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  this.x = data.readInt32LE(38);
  this.y = data.readInt32LE(42);
  this.maxColorNum = data.readInt32LE(46);
  this.hS = data.readInt32LE(14);
  this.pixW = data.readInt32LE(18);
  this.pixH = data.readInt32LE(20);
  this.BpP = data.readInt32LE(24);
}

fileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
  if(err) throw err;
  bitObj.thingOne = new BitConstructor(data);
  console.log(bitObj);
  return data;
});
