const expect = require('expect');

it('expect test cases', () => {

    /** toBe => works with string or number but not object */

    // expect(12).toBe(12); //works and pass

    // expect({name: 'Tubby'}).toBe({name: 'Tubby'}); //does'nt work with object and always fail

    
    /** toEqual / toNotEqual => works with string or number and also object */

    //expect({name: 'Monika'}).toEqual({name: 'monika'}); //works and fail
    
    /** toInclude / toExclude => works with array or object (Json) */

    //expect([2,3,4]).toInclude(5); //works and fail => check if exists

    //expect([2,3,4]).toExclude(5) ; //works and pass => check if doesn't exist

    expect({

        name: 'Tubby',
        age: 4,
        location: 'Delray Beach'

    }).toInclude({
        age: 4
    });  //works and pass

});