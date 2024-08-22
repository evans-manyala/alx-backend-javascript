const { describe, it } = require('mocha');
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    const watcher = sinon.watcher(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(watcher.calledOnceWithExactly('SUM', 100, 20), 'Utils.calculateNumber was not called with correct arguments');
    watcher.restore();
  });
});