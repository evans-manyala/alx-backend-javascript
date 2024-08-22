const { describe, it } = require('mocha');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data when success is true', async () => {
    const result = await getPaymentTokenFromAPI(true);
    expect(result.data).to.equal('Successful response from the API');
  });
});
