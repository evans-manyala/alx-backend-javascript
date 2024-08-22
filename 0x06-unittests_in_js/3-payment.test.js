const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber once', () => {

    const watcher = sinon.watcher(Utils, 'calculateNumber');
    const request = sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(watcher);
    expect(watcher.calledOnce).to.be.true;

    expect(watcher.calledOnceWithExactly("SUM", 100, 20)).to.equal(true);
    expect(utils.calculateNumber("SUM", 100, 20)).to.equal(request);

    watcher.restore();
  });
});
