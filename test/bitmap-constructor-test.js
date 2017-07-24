'use strict';

const expect = require('chai').expect;
const bitmapConstructor = require(`${__dirname}/../model/bitmap-constructor.js`);
const bitmapFileHelper = require(`${__dirname}/../lib/bitmap-file-helper.js`);

describe('Bitmap Constructor', function() {
  describe('if object', () => {
    it('should return new Bitmap object', done => {
      bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, function(err, data) {
        if(err) throw err;
        let result = new bitmapConstructor.Bitmap(data);
        expect(result).to.be.an('object');
        done();
      });
    });
  });
});



