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

// exports.Bitmap.prototype.greyScale = function(colorArrayText) {
//   let colorArray = colorArrayText.match(/.{1,8}/g);
//   let greyArray = [];
//
//   colorArray.forEach(function(n){
//     let pairsArray = n.match(/.{1,2}/g);
//     let b = parseInt(pairsArray[0],16); //hex value to decimal value;
//     let g = parseInt(pairsArray[1],16);
//     let r = parseInt(pairsArray[2],16);
//     var avg = Math.floor((Math.max(r,g,b) + Math.min(r,g,b)) / 2);
//     pairsArray[0] = avg.toString(16);
//     pairsArray[1] = avg.toString(16);
//     pairsArray[2] = avg.toString(16);
//     pairsArray.forEach(function(value, i){
//       if(value.length === 1){
//         pairsArray[i] = '0'+pairsArray[i];
//       }
//     });
//     let greyHex = pairsArray.join('');
//     greyArray.push(greyHex);
//     let greyColorArrayText = greyArray.join('');
//     return greyColorArrayText;
//   });
// };
//
// exports.Bitmap.prototype.invertColor = function(colorArrayText) {
//   let colorArray = colorArrayText.match(/.{1,8}/g);
//   let invertedColorArray = [];
//
//   colorArray.forEach(function(n){
//     let pairsArray = n.match(/.{1,2}/g);
//     let invertArray = [];
//     let b = parseInt(pairsArray[0],16); //hex value to decimal value;
//     let g = parseInt(pairsArray[1],16);
//     let r = parseInt(pairsArray[2],16);
//     let bInvert = (255-b).toString(16); // invert ;
//     let gInvert = (255-g).toString(16);
//     let rInvert = (255-r).toString(16);
//     invertArray.push(bInvert, gInvert, rInvert, '00');
//     invertArray.forEach(function(value, i){
//       if(value.length === 1){
//         invertArray[i] = '0'+invertArray[i];
//       }
//     });
//
//     let invertHex = invertArray.join('');
//     invertedColorArray.push(invertHex);
//   });
//
//   let invertedColorString = invertedColorArray.join('');
//   return invertedColorString;
// };
//
// exports.Bitmap.prototype.reverser = function(pixelArrayText) {
//   let pixelArray = pixelArrayText.match(/.{1,2}/g);
//
//   let reversed = pixelArray.reverse();
//   return reversed.join('');
// };
//
