const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul.js');

describe("calculateNumber()", function() {

  it(`checking if numbers round`, function() {
    const response = calculateNumber(1, 2);
    assert.strictEqual(response, 3);
  });
  it(`checking if numbers round`, function() {
    const response = calculateNumber(1.4, 2.2);
    assert.strictEqual(response, 3);
  });
  it(`checking if numbers round`, function() {
    const response = calculateNumber(1.6, 2.7);
    assert.strictEqual(response, 5);
  });
  it(`checking if numbers round`, function() {
    const response = calculateNumber(0, 0);
    assert.strictEqual(response, 0);
  });
  it(`checking if numbers round`, function() {
    const response = calculateNumber(-1.6, -1.7);
    assert.strictEqual(response, -4);
  });
  it(`checking if numbers round`, function() {
    const response = calculateNumber(-1.4, -1.3);
assert.strictEqual(response, -2);
  });
})
