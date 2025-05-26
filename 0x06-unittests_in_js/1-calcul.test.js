const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('1-calcul.js tests', () => {
  describe('test addition with 2 rounded numbers',
    () => {
      /* it('rounds both numbers', () => assert.strictEqual(
        calculateNumber('SUM', 4.9, 2.1), 7,
      )); */
    });

  describe(
    'test subtraction with 2 rounded numbers',
    () => {
      /* it('rounds both numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 4.9, 2.1), 3);
      }); */
    },
  );

  describe(
    'test division with 2 rounded numbers',
    () => {
      it('rounds first number only', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.1, 0), 'Error');
      });

      it('rounds both numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4.9, 2.1), 2.5);
      });
    },
  );
});
