'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.initFile = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if(err) return callback(err);
    return callback(null, data);
  });
};

exports.writeNew = (path, data) => {
  return fs.writeFile(path, data, (err, data) => {
    if(err) console.log(err);
    return data;
  })
};
