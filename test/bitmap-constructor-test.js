'use strict';

const expect = require('chai').expect;
const index = require(`${__dirname}/../index.js`);
const fileReader = require(`${__dirname}/../lib/bitmap-file-helper.js`);

describe('Bitmap Constructor Module', () => {
  describe('#Invert Bitmap', () => {
    it('Should have a new file written', (done) => {
      fileReader.eraseFile(`${__dirname}/../assets/palette-write-bitmap.bmp`);
      index.invertBitmap();
      fileReader.initFile(`${__dirname}/../assets/palette-write-bitmap.bmp`, (err, data) => {
        expect(err).to.equal(null);
        expect(data).to.not.equal(null);
        done();
      });
    });
  });
  describe('#Color Shift Bitmap', () => {
    it('Should have a new file written', (done) => {
      fileReader.eraseFile(`${__dirname}/../assets/palette-write-bitmap.bmp`);
      index.colorShiftBitmap();
      fileReader.initFile(`${__dirname}/../assets/palette-write-bitmap.bmp`, (err, data) => {
        expect(err).to.equal(null);
        expect(data).to.not.equal(null);
        done();
      });
    });
  });
  describe('#Rotate Bitmap', () => {
    it('Should have a new file written', (done) => {
      fileReader.eraseFile(`${__dirname}/../assets/palette-write-bitmap.bmp`);
      index.rotateBitmap();
      fileReader.initFile(`${__dirname}/../assets/palette-write-bitmap.bmp`, (err, data) => {
        expect(err).to.equal(null);
        expect(data).to.not.equal(null);
        done();
      });
    });
  });
});
