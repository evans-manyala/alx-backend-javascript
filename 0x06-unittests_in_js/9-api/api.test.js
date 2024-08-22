/* eslint-disable jest/expect-expect */
const assert = require('assert');
const { request } = require('http');

describe('index page', () => {
  it('Verify status code 200', () => new Promise((done) => {
    request('http://localhost:7865', (res) => {
      assert.strictEqual(res.statusCode, 200);
      done();
    }).end();
  }));

  it('Verify the welcome message', () => new Promise((done) => {
    request('http://localhost:7865', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Welcome to the payment system');
        done();
      });
    }).end();
  }));
});

describe('cart page', () => {
  it('Verify status code 200 when :id is a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/123', (res) => {
      assert.strictEqual(res.statusCode, 200);
      done();
    }).end();
  }));

  it('Verify status code 404 when :id is not a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/abc', (res) => {
      assert.strictEqual(res.statusCode, 404);
      done();
    }).end();
  }));

  it('Verify payment methods for cart :id', () => new Promise((done) => {
    request('http://localhost:7865/cart/123', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Payment methods for cart 123');
        done();
      });
    }).end();
  }));
});
