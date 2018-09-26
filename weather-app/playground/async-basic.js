//number* -- order of execution

console.log('Starting app...');   //1*

setTimeout(() => {

    console.log('Inside of Callback'); //4*

}, 2000);

setTimeout(() => {

    console.log('Call Back - No delay');  //3*

}, 0);

console.log('Finishing app...'); //2*