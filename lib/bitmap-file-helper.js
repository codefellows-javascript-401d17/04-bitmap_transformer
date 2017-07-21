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
  fs.writeFile(path, data, (err) => {
    if(err) return err;
  });
};
