var asyncAdd = (a, b) => {

    return new Promise(

        (resolve, reject) => {

            setTimeout(() => {

                if (typeof a === 'number' && typeof b === 'number') {

                    resolve(a + b);

                } else {
                    reject('Arguments must be numbers');
                }

            }, 1500);

        }

    );

}

asyncAdd(5, 7).then(

    (result) => {

        console.log(result);

        return asyncAdd(result,'40');  //chained promises

    }
    // ,
    // (error) => {
    //     console.log(error);
    // }

).then(

    (result)=>{

        console.log(result);
     }
     //,

    // (error)=> {

    //     console.log(error);

    // }
).catch(    //Catch replaces the error handler in chained promises ; occurs at the end -> grabs error fired at any level

    (error)=>{

        console.log(error);
    }
)


// var somePromise = new Promise(   //you can resolve or reject a promise only once. ; only either of resolve or reject will be fired
//     (resolve, reject) => {

//         setTimeout(() => {
//            // resolve('Hey. It worked');

//            reject('Unable to fulfill promise');

//         }, 2500);

//     }
// );

// somePromise.then(  
//     (message) => {   // called when promise is resolved
//         console.log('Success : '+message);
//     },
//     (errorMessage)=>{ //called when promise is rejected
//         console.log('Rejected : '+errorMessage);
//     }
// )