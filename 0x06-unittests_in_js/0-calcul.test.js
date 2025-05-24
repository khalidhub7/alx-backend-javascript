const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('test add func', () => {
  it('test suite for first number rounded',
    () => {
      assert.strictEqual(
        calculateNumber(1.1, 0), 1);
    });

  /* it('test suite for second number rounded',
    () => {
      assert.strictEqual(
        calculateNumber(0, 2.9), 3);
    }); */

  it('test suite for both number rounded',
    () => {
      assert.strictEqual(
        calculateNumber(4.9, 2.1), 7);
    });
});
