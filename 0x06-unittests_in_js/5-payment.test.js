const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyFunc;

  beforeEach(() => { spyFunc = sinon.spy(console, 'log'); });

  afterEach(() => spyFunc.restore());

  it('should log the correct total for 100 and 20',
    () => {
      sendPaymentRequestToApi(100, 20);
      expect(spyFunc.calledOnce).to.equal(true);
      expect(spyFunc.calledWith('The total is: 120'))
        .to.equal(true);
    });

  it('should log the correct total for 10 and 10',
    () => {
      sendPaymentRequestToApi(10, 10);
      expect(spyFunc.calledOnce).to.equal(true);
      expect(spyFunc.calledWith('The total is: 20'))
        .to.equal(true);
    });
});
