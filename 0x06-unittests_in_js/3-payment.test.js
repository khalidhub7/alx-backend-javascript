const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  before(() => {
    sinon.stub(console, 'log').returns();
  });

  after(() => {
    console.log.restore();
    Utils.calculateNumber.restore();
  });

  let spycalcnum;

  it('spy Utils.calculateNumber',
    () => {
      spycalcnum = sinon.spy(Utils, 'calculateNumber');
    });

  it('call sendPaymentRequestToApi',
    () => sendPaymentRequestToApi(100, 20));

  it('calculateNumber called with correct args',
    () => expect(spycalcnum
      .calledWith('SUM', 100, 20)).to.equal(true));
});
