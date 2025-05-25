const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe(
  'test addition with 2 rounded numbers',
  () => {
    /* it('rounds first number only', () => {
      assert.strictEqual(calculateNumber(1.1, 0), 1);
    }); */

    it('rounds both numbers', () => {
      assert.strictEqual(calculateNumber(4.9, 2.1), 7);
    });
  },
);

