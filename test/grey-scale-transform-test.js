'use strict';

const expect = require('chai').expect;
const greyscaleTransform = require(`${__dirname}/../lib/grey-scale-transform.js`);

describe('Grey Scale Transform', function() {
  describe('with valid string', () => {
    it('should return grey scale string', done => {
      let test = greyscaleTransform('55aacc');
      expect(test).to.deep.equal('909090');
      done();
    });
  });
});
