const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const watcher = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(watcher.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(watcher.calculateNumber.callCount).to.be.equal(1);
    watcher.calculateNumber.restore();
  });
});
