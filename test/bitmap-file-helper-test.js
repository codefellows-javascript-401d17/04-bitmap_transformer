'use strict';

const expect = require('chai').expect;
const fileReader = require(`${__dirname}/../lib/bitmap-file-helper.js`);

describe('File Helper Module', function(){
  describe('#Init File', () => {
    it('Should not error', (done) => {
      fileReader.initFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
        expect(err).to.equal(null);
        done();
      });
    });
    it('Should find data', (done) => {
      fileReader.initFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
        expect(data).to.not.equal(null);
        done();
      });
    });
  });
  describe('#Write New', () => {
    it('Should write new file', (done) => {
      fileReader.eraseFile(`${__dirname}/../assets/palette-write-bitmap.bmp`);
      fileReader.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, `${__dirname}/../assets/palette-bitmap.bmp`);
      fileReader.initFile(`${__dirname}/../assets/palette-write-bitmap.bmp`, (err, data) => {
        expect(err).to.equal(null);
        expect(data).to.not.equal(null);
        done();
      });
    });
  });
  describe('#Erase file', () => {
    it('Should erase palette-write-bitmap.bmp', (done) => {
      fileReader.initFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
        expect(err).to.equal(null);
        fileReader.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, data);
        expect(data).to.not.equal(null);
        fileReader.eraseFile(`${__dirname}/../assets/palette-write-bitmap.bmp`);
        done();
      });
    });
  });
});
