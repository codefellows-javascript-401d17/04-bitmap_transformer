'use strict';

const ColorTransform = module.exports = function () {
};

// ColorTransform.prototype.colorShift = function(bitmap) {
//   let colorMap = bitmap.colorMap;
//   return colorMap.map(function(pixel) {
//     let newPix = pixel + 1;
//     console.log(newPix.toString(16));
//     return newPix.toString(16);
//   });
// };

ColorTransform.prototype.invertColors = function (bitmap) {
  let colorTable = bitmap.colorTable;

  return colorTable.map(function (hexColor) {
    let hexArray = hexColor.match(/.{1,2}/g);

    let r = parseInt(hexArray[0], 16);
    let g = parseInt(hexArray[1], 16);
    let b = parseInt(hexArray[2], 16);
    let invertR = (255 - r).toString(16);
    let invertG = (255 - g).toString(16);
    let invertB = (255 - b).toString(16);

    let invertArray = [invertR, invertG, invertB, '00'];
    // console.log(invertArray);

    invertArray.forEach(function (val, i) {
      if (val.length === 1) {
        invertArray[i] = '0' + invertArray[i];
      }
    });

    invertArray = invertArray.join('');
    return invertArray;
  });
};

ColorTransform.prototype.blueShift = function (bitmap) {
  let colorTable = bitmap.colorTable;
  return colorTable.map(function (hexColor) {
    let hexArray = hexColor.match(/.{1,2}/g);

    let r = parseInt(hexArray[0], 16);
    let g = parseInt(hexArray[1], 16);
    let b = parseInt(hexArray[2], 16);
    let invertR = (Math.ceil(r * 0.33)).toString(16);
    let invertG = (g).toString(16);
    let invertB = (b).toString(16);

    let colorShiftArray = [invertR, invertG, invertB, '00'];
    colorShiftArray.forEach(function (val, i) {
      if (val.length === 1) {
        colorShiftArray[i] = '0' + colorShiftArray[i];
      }
    });

    colorShiftArray = colorShiftArray.join('');
    return colorShiftArray;
  });
};

