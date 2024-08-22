const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let watcher;

  beforeEach(function() {
    
    watcher = sinon.watcher(Utils, 'calculateNumber');
  });

  afterEach(function() {
    watcher.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {

    sendPaymentRequestToApi(100, 20);

    expect(watcher.calledOnce).to.be.true;
    expect(watcher.calledWith('SUM', 100, 20)).to.be.true;
  });
});
