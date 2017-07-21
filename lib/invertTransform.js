'use strict';

module.exports = exports = function invertColor(colorArrayText){
  let colorArray = colorArrayText.match(/.{1,8}/g);
  let invertedColorArray = [];

  colorArray.forEach(function(n){
    let pairsArray = n.match(/.{1,2}/g);
    let invertArray = [];
    let b = parseInt(pairsArray[0],16); //hex value to decimal value;
    let g = parseInt(pairsArray[1],16);
    let r = parseInt(pairsArray[2],16);
    let bInvert = (255-b).toString(16); // invert ;
    let gInvert = (255-g).toString(16);
    let rInvert = (255-r).toString(16);
    invertArray.push(bInvert, gInvert, rInvert, '00');
    invertArray.forEach(function(value, i){
      if(value.length === 1){
        invertArray[i] = '0'+invertArray[i];
      }
    });

    let invertHex = invertArray.join('');
    invertedColorArray.push(invertHex);
  });

  let invertedColorString = invertedColorArray.join('');
  return invertedColorString;
};
