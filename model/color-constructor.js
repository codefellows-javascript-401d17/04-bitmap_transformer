module.exports = function ColorTransform (bitmap) {
};

ColorTransform.prototype.colorShift = function(bitmap) {
  let colorMap = bitmap.colorMap;
  colorMap.map(function(pixel) {
    console.log(pixel + 1);
    return pixel + 1;
  })

  return colorMap;
};

