const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('test add func', () => {
  it('should return 7', () => {
    assert.strictEqual(
      calculateNumber(8, -1), 7);
  });
});
