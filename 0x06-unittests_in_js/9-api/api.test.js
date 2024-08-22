const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Index Page', function() {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };

  it('Verify the correct status code', function(done) {
    request(options, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Verify the correct content', function(done) {
    request(options, function(err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('Verify the correct content length', function(done) {
    request(options, function(err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should return a 200 status code when ID is a number', (done) => {
    chai.request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return a 404 status code when ID is not a number', (done) => {
    chai.request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  // Add more tests to check the content of the response
});