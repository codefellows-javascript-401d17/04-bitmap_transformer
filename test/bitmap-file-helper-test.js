'use strict';

const expect = require('chai').expect;
const bitmapFileHelper = require(`${__dirname}/../lib/bitmap-file-helper.js`);

describe('Bitmap File Reader', function() {
    describe('with improper file path', () => {
        it('should return an error', done => {
            bitmapFileHelper(`${__dirname}/not-a-file.bmp`, err => {
                expect(err).to.be.an('error');
                done();
            });
        });
    });
});