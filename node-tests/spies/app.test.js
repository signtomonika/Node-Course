const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');  //indicating that the replacement is going to be done for usage in file "app.js"

describe('App', () => {

    //creating variable db 

    var dbRewired = {
        saveUser: expect.createSpy()  //defining saveUser as a spy => function called on db in app.js file
    };

    // replacing the variable/constant db in app.js file with the variable dbRewired

    app.__set__('db',dbRewired);

    it('should call the spy correctly', () => {

        var spy = expect.createSpy();  //creating spy

        // without arguments
        /*******************/

        //    spy();

        //    expect(spy).toHaveBeenCalled();

        // with arguments
        /*******************/

        spy('Tubby', 4);

        expect(spy).toHaveBeenCalledWith('Tubby', 4);


    });

    it('should call saveUser with user object',()=>{

        var email = 'tubby@abc.com';
        var password = 'tubby';

        app.handleSignUp(email, password);  //when handleSignUp calls saveUser on db, the spy will be called instead of actual function in db.js file

        expect(db.saveUser).toHaveBeenCalledWith({email,password}); //using calledWith because of arguments passed

    });

});