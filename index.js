'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);



// const bmp = {};

// bmp.all = bitmap.toString('hex');
// bmp.type = bitmap.toString('utf-8', 0, 2);
// bmp.size = bitmap.readInt32LE(2);
// bmp.sizeOfHeader = bitmap.readInt32LE(14);
// bmp.offsetToPixelArr = bitmap.readInt32LE(10);
// bmp.numBytesInDIBFromThisPoint = bitmap.readInt32LE(20);
// bmp.width = bitmap.readInt32LE(18);
// bmp.height = bitmap.readInt32LE(22);
// bmp.colorArray = bitmap.readInt32LE(24);
// bmp.bitsPerPx = bitmap.readInt32LE(28);
// bmp.compressionMethod = bitmap.readInt32LE(30);
// bmp.colorsInTable = bitmap.readInt32LE(46);
// bmp.importantColors = bitmap.readInt32LE(50);
// bmp.STARTOFTHECOLORARRY = bitmap.readInt32LE(66);
// bmp.actualColorArray = bitmap.toString('hex', 54, 182);

// console.log('my current bitmap:', bmp);