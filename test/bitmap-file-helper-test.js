'use strict';

const expect = require('chai').expect;
const fileReader = require(`${__dirname}/../lib/bitmap-file-helper.js`);

describe('File Helper Module', function(){
  describe('Init File', () => {
    fileReader.initFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
      it('Should not error', () => {
        expect(err).to.not(err);
      });
      it('Should have data', () => {
        expect(data).to.exist();
      });
    });
  });
  describe('Write New', () => {
    fileReader.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, `${__dirname}/../assets/palette-bitmap.bmp`);
  });
});
