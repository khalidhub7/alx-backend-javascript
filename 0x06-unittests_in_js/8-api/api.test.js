const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('8-api tests', () => {
  let statusCode;
  let content;

  before((done) => {
    request.get('http://localhost:7865/',
      (err, res, body) => {
        if (err) { return done(err); }
        statusCode = res.statusCode; content = body;
        return done();
      });
  });

  it('should return 200 status',
    () => {
      expect(statusCode).to.equal(200);
    });

  it('should return welcome message',
    () => {
      expect(content).to.equal(
        'Welcome to the payment system',
      );
    });
});
