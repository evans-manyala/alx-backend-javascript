const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber once', function() {
    const watcher = sinon.watcher(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(50, 24.52);
    
    expect(watcher.calledOnce).to.be.true;
    
    watcher.restore();
  });
});