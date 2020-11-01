import { sum, mul } from "../util"
var assert = require('assert');
describe('test add func', function () {
  it('1+5 === 6', function () {
    assert.equal(sum(1, 5), 6);
  });
  it('-1+5 === 4', function () {
    assert.equal(sum(-1, 5), 4);
  });
  it('10*5 === 50', function () {
    assert.equal(mul(10, 5), 50);
  });
});