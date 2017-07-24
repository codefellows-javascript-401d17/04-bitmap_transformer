// 'use strict';
//
// const expect = require('chai').expect;
// const bitmapFileHelper = require(`${__dirname}/../lib/bitmap-file-reader.js`);
//
// describe('Bitmap File Helper', function() {
//   describe('with improper file path', () => {
//     it('should return an error', done => {
//       bitmapFileHelper(`${__dirname}/not-a-file.bmp`, err => {
//         expect(err).to.be.an('error');
//         done();
//       });
//     });
//   });
//
//   describe('with proper file path', () => {
//     it('should return the content of the file', done => {
//       bitmapFileHelper(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
//         expect(err).to.equal(null);
//         expect(data.toString()).to.be.a('string');
//         expect(data.toString('hex', 0, 2)).to.equal('424d');
//         done();
//       });
//     });
//   });
// });
