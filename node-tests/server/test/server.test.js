const superTest = require('supertest');

const expect = require('expect');

const app = require('../server').app;

describe('Express App',()=>{

    describe('#root',()=>{

        it('should return hello world response', (done) => {  //using done bcoz express app is async

            superTest(app)
                .get('/')
                .expect(404)   //response status code 200 ; expect is from superTest
                .expect((res) => {
        
                    expect(res.body).toInclude({            // expect is from package Expect
                        error: 'Page not found'
                    });
        
                })
                .end(done);
        
        });
        
    });

    describe('#users',()=>{

        it('should return user object', (done) => {

            superTest(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Tubby',
                        age: 4
                    });
        
                })
                .end(done);
        
        });

    });

});

