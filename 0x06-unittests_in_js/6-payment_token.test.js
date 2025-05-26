const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return api response object',
    (done) => {
      const response = getPaymentTokenFromAPI(true);
      expect(response).to.deep.equal({
        data: 'Successful response from the API',
      });
      done();
    });
});
