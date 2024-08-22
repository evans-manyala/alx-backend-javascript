const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    it("Verify the the correct the correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("Verify the the correct content", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });

    it("Verify the the correct content length", function(done) {
        request(options, function(err, res, body) {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});

describe("Cart page", function() {
    const validOptions = {
        url: "http://localhost:7865/cart/123",
        method: "GET"
    };

    const invalidOptions = {
        url: "http://localhost:7865/cart/abc",
        method: "GET"
    };

    it("Verify the correct status code for valid :id", function(done) {
        request(validOptions, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("Verify the correct content for valid :id", function(done) {
        request(validOptions, function(err, res, body) {
            expect(body).to.contain("Payment methods for cart 123");
            done();
        });
    });

    it("Verify the correct status code 404 for invalid :id", function(done) {
        request(invalidOptions, function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it("Verify the correct status code 404 for missing :id", function(done) {
        request({
            url: "http://localhost:7865/cart/",
            method: "GET"
        }, function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});

describe("Available Payments", function() {
    const options = {
        url: "http://localhost:7865/available_payments",
        method: "GET"
    };

    it("Verify the correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("Verify the correct content", function(done) {
        request(options, function(err, res, body) {
            const expected = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(body).to.equal(JSON.stringify(expected));
            done();
        });
    });
});

describe("Login", function() {
    const options = {
        url: "http://localhost:7865/login",
        method: "POST",
        json: true,
        body: { userName: "testUser" }
    };

    it("Verify the correct status code with userName", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("Verify the correct message with userName", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.contain("Welcome testUser");
            done();
        });
    });

    it("Verify the correct status code 400 without userName", function(done) {
        request({
            url: "http://localhost:7865/login",
            method: "POST",
            json: true,
            body: {}
        }, function(err, res, body) {
            expect(res.statusCode).to.equal(400);
            expect(body).to.equal('Missing userName');
            done();
        });
    });
});
