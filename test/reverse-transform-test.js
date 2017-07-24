'use strict';

const expect = require('chai').expect;
const reverseTransform = require(`${__dirname}/../lib/reverse-transform.js`);

describe('Reverse Transform', function(){
  describe('with valid string', () =>{
    it('should return a flip of pairs', done =>{
      let test = reverseTransform('1c002d');
      expect(test).to.be.a('string');
      expect(test).to.deep.equal('2d001c');
      done();
    });
  });
});
