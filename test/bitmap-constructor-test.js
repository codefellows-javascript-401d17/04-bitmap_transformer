'use strict';

const expect = require('chai').expect;
const bitmapConstructor = require(`${__dirname}/../model/bitmap-constructor.js`);

describe('Bitmap Constructor', function() {
  describe('if not an object', () => {
      it('should throw not an object error', done => {
        let result = bitmapConstructor();
        expect(result).to.throw(Error);
        done();
      });
  });
  describe('if object', () => {
    it('should return new Bitmap object', done => {
      let result = bitmapConstructor();
      expect(result).to.be.an('object');
    });
  });
});
