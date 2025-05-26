const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spyCalcNum;

  // prevents console.log during tests
  before(() => sinon.stub(console, 'log'));

  // restores Utils.calculateNumber
  after(() => Utils.calculateNumber.restore());

  it('should spy on Utils.calculateNumber',
    () => { spyCalcNum = sinon.spy(Utils, 'calculateNumber'); });

  it('should call sendPaymentRequestToApi with args',
    () => sendPaymentRequestToApi(100, 20));

  it('should check Utils.calculateNumber called with correct args',
    () => expect(spyCalcNum.calledWith('SUM', 100, 20)).to.be.true);
});
