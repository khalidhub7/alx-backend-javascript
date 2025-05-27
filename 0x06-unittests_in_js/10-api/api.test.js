const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('10-api tests', () => {
  it('should return welcome msg', (done) => {
    request.get(
      'http://localhost:7865/', (err, res, body) => {
        if (err) { return done(err); }
        // tests
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(
          'Welcome to the payment system',
        );
        return done();
      },
    );
  });

  it('should return cart msg for valid id',
    (done) => {
      request.get(
        'http://localhost:7865/cart/7', (err, res, body) => {
          if (err) { return done(err); }
          // tests
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal(
            'Payment methods for cart 7',
          );
          return done();
        },
      );
    });

  it('should return 404 for invalid id',
    (done) => {
      request.get(
        'http://localhost:7865/cart/rr', (err, res) => {
          if (err) { return done(err); }
          // tests
          expect(res.statusCode).to.equal(404);
          return done();
        },
      );
    });

  it('should return payment methods',
    (done) => {
      request.get({
        url: 'http://localhost:7865/available_payments',
        json: true,
      },
      (err, res, body) => {
        if (err) { return done(err); }
        // tests
        expect(res.statusCode).to.equal(200);
        expect(body).to.deep.equal(
          { payment_methods: { credit_cards: true, paypal: false } },
        );
        return done();
      });
    });

  it('should return login response',
    (done) => {
      request.post({
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' },
      },
      (err, res, body) => {
        if (err) { return done(err); }
        // tests
        expect(res.statusCode).to.equal(200);
        expect(body).to.deep.equal('Welcome Betty');
        return done();
      });
    });
});
