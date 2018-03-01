const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

let expect = chai.expect;

describe('create user', () => {
    describe('pake method post', () => {
      it('user dibuat', done => {
        chai.request('http://localhost:3000/users')
        .post('/signup')
        .type('form')
        .send({
          username: 'test',
          password: 'test'
        })
        .end(function(err, res){
          expect(res.status).to.equal(200)
          //console.log(res.username)
          done()
          })
        });
      });
    });
