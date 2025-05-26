const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('2-calcul.js tests', () => {
  describe(
    'test addition with 2 rounded numbers',
    () => {
      it('rounds both numbers', () => expect(
        calculateNumber('SUM', 4.9, 2.1)).to.equal(7)
      );
    },
  );

  describe(
    'test subtraction with 2 rounded numbers',
    () => {
      it('rounds both numbers', () => expect(
        calculateNumber('SUBTRACT', 4.9, 2.1)).to.equal(3)
      );
    },
  );

  describe(
    'test division with 2 rounded numbers',
    () => {
      it('rounds first number only', () => expect(
        calculateNumber('DIVIDE', 1.1, 0)).to.equal('Error')
      );

      it('rounds both numbers', () => expect(
        calculateNumber('DIVIDE', 4.9, 2.1)).to.equal(2.5)
      );
    },
  );
});
