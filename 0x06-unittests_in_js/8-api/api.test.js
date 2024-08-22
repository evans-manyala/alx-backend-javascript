const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api.js');

chai.use(chaiHttp);
const { expect } = chai;

describe('Index Page', () => {
  it('should return a 200 status code', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
