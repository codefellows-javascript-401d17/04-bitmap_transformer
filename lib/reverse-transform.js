'use strict';

module.exports = exports = function reverser(pixelArrayText) {
  let pixelArray = pixelArrayText.match(/.{1,2}/g);
  let reversed = pixelArray.reverse().join('');

  return reversed;
};
