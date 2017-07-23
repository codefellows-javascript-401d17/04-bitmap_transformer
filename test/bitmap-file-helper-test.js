'use strict';

const expect = require('chai').expect;
const fileReader = require(`${__dirname}/../lib/bitmap-file-helper.js`);

describe('File Helper Module', function(){
  describe('Init File', () => {
    it('Should not error', (done) => {
      fileReader.initFile(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data){
        console.log(err);
        expect(err).to.equal(null);
        done();
      });
    });
    it('Should find data', (done) => {
      fileReader.initFile(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data){
        console.log(data);
        expect(data).to.not.equal(null);
        done();
      });
    });
  });
  describe('Write New', () => {
    it('Should ', () => {
      fileReader.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, `${__dirname}/../assets/palette-bitmap.bmp`);
    });
  });
});
