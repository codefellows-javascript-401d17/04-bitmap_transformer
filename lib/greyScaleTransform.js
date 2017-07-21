'use strict';

module.exports = exports = function greyScale(colorArrayText){
  let colorArray = colorArrayText.match(/.{1,8}/g);
  let greyArray = [];

  colorArray.forEach(function(n){
    let pairsArray = n.match(/.{1,2}/g);
    let b = parseInt(pairsArray[0],16); //hex value to decimal value;
    let g = parseInt(pairsArray[1],16);
    let r = parseInt(pairsArray[2],16);
    var avg = Math.floor((Math.max(r,g,b) + Math.min(r,g,b)) / 2);
    pairsArray[0] = avg.toString(16);
    pairsArray[1] = avg.toString(16);
    pairsArray[2] = avg.toString(16);
    pairsArray.forEach(function(value, i){
      if(value.length === 1){
        pairsArray[i] = '0'+pairsArray[i];
      }
    });
    let greyHex = pairsArray.join('');
    greyArray.push(greyHex);
    let greyColorArrayText = greyArray.join('');
    return greyColorArrayText;
  });
};
