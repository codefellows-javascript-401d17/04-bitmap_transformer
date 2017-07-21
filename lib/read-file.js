'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');

module.exports = function(inputFile, cb) {
  fs.readFile(inputFile, function(err, data) {
    if(err) console.error(err);
    var result = new Bitmap(data);
    cb(null, result);
  };
};