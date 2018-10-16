const expect = require('expect');

const utils = require('../utils');

describe('Utils without Async', () => {   //reading and scanning easier

    describe('#add', () => {
        it('should add two numbers', () => {
            var result = utils.add(33, 11);


            // if(result !==44) {
            //        throw new Error(`Expected 44, but got ${result}`);
            // }

            /* Above is replaced by below */

            expect(result).toBe(44).toBeA('number');

        });
    });

    describe('#square', () => {
        it('should square a number', () => {

            var sqResult = utils.square(10);

            expect(sqResult).toBeA('number');
            expect(sqResult % 2).toBe(0);

        });
    });

    describe('#set user', () => {

        it('should verify first and last names are set', () => {

            var user = utils.setName({
                age: 4,
                location: 'Delray Beach'
            }, 'Tubby Tobby');

            expect(user).toBeA('object').toInclude({
                firstName: 'Tubby',
                lastName: 'Tobby'
            });
        });

    });


});

  /*** Async Testing Starts */

    // it('should async add two numbers', ()=>{

    //     utils.asyncAdd(4,3,(sum)=>{

    //         expect(sum).toBe(10).toBeA('number'); //this assertion will never run (bcoz async) and will always result in pass

    //     });

    // });

 

describe('Utils with Async', () => {

    describe('#add', () => {
    it('should async add two numbers with Async', (done) => {  //mocha knows to run the test only after the async function finishes

        utils.asyncAdd(4, 3, (sum) => {

            expect(sum).toBe(7).toBeA('number');

            done();

        });

    });

    });

    describe('#square', () => {

    it('should async square a number', (done) => {

        utils.asyncSquare(3, (square) => {

            expect(square).toBeA('number').toBe(9);

            done();

        })

    });

  
});

});

 /*** Async Testing Ends */
