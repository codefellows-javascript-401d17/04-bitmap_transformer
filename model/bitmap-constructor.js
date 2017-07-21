'use strict';

module.exports = exports = {};

exports.Bitmap = function(data) {
  this.name = data.toString('hex', 0, 2);
  console.log(data);
};
