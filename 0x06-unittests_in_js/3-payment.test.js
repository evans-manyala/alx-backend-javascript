// const {describe, it} = require("mocha");
const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert');

const {sendPaymentRequestToApi} = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it("check if Utils.calculateNumber was called once", () => {
	const watcher = sinon.watcher(Utils, "calculateNumber");

	sendPaymentRequestToApi(50, 24.52);

	assert(watcher.calledOnce, true);
	watcher.restore();
    });
});
