const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  // restores Utils.calculateNumber
  after(() => Utils.calculateNumber.restore());

  it('should stub the Utils.calculateNumber',
    () => sinon.stub(Utils, 'calculateNumber').returns(10));

  it('should return 10 when calling Utils.calculateNumber',
    () => {
      expect(
        Utils.calculateNumber('SUBTRACT', 7, 11),
      )
        .to.equal(10);
    });
});
