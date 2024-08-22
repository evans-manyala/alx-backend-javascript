const {describe, it} = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const assert = require("assert");

const sendPaymentRequestToApi= require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    // Create a spy for Utils.calculateNumber
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    // Restore the original function after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Verify the spy was called with correct arguments
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
