const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber once', function() {

    const spy = sinon.spy(Utils, 'calculateNumber');
    

    sendPaymentRequestToApi(50, 24.52);
    

    expect(spy.calledOnce).to.be.true;
    

    spy.restore();
  });
});
