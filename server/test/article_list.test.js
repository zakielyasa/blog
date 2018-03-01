const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Liat semua list article', () => {
    describe('Pake GET all article', () => {
        it('Keluar semua daftar articlenya', done => {
        chai.request('http://localhost:3000/article')
        .get('/')
        .end(function(err, res){
            expect(res).    
        done()
        })    
        })
    })
})