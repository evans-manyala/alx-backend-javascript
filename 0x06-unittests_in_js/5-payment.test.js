const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');
const consoleLogSpy = sinon.spy(console, 'log');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    consoleLogSpy.resetHistory();
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
