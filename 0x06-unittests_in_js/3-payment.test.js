const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
	const watcher = sinon.watcher(Utils, "calculateNumber");

	sendPaymentRequestToApi(50, 24.52);

	assert(watcher.calledOnce);
	watcher.restore();
    });
});