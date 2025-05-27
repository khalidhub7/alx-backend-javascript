const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('9-api tests', () => {
  it('should return 200 status and correct message',
    (done) => {
      request.get('http://localhost:7865/cart/7',
        (err, res, body) => {
          if (err) { return done(err); }
          // tests
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Payment methods for cart :7');
          return done();
        });
    });

  it('should return 404 status and invalid id message',
    (done) => {
      request.get('http://localhost:7865/cart/rr',
        (err, res) => {
          if (err) { return done(err); }
          // tests
          expect(res.statusCode).to.equal(404);
          return done();
        });
    });
});
