'use strict';

const ColorTransform =  module.exports = function() {
};

ColorTransform.prototype.colorShift = function(bitmap) {
  let colorMap = bitmap.colorMap;
  return colorMap.map(function(pixel) {
    let newPix = pixel + 1;
    console.log(newPix.toString(16));
    return newPix.toString(16);
  });
};
