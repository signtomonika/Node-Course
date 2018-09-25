console.log('Starting app.js..');

/***************************************************************************************** */
/****** Using Node Files ****** */


// using node API in "https://nodejs.org/api/fs.html"

const fs = require('fs');

//using node API in "https://nodejs.org/api/os.html"

const os = require('os');

var user = os.userInfo();


//console.log('User Info Object: ',user);

// fs.appendFile('greetings.txt','Hello World!', function(err){
//     if(err){
//         console.log('Unable to write to file');
//     } else {
//         console.log('File Write Success!');
//     }
// });

//  //below doesn't take call back function as argument

// fs.appendFileSync('greetings.txt','Hello World! - Using appendFileSync');



fs.appendFile('greetings.txt','Hello '+ user.username+' !', function(err){
    if(err){
        console.log('Unable to write to file');
    } else {
        console.log('User Name Write Success!');
    }
});



/***************************************************************************************** */
/***** using custom files  *******/


const notes = require('./notes.js');  //relative path

var res = notes.addNote();
//console.log('Output from notes.js function addNote() :', res);

//another way to include a variable

fs.appendFileSync('greetings.txt',`\n Hello ${user.username} ! You are ${notes.age} years old.`); 

var sum = notes.add(100, 900);

console.log('Sum is ',sum);

/***************************************************************************************** */
/***** using 3rd party packages  *******/

const _= require('lodash');

console.log(_.isString('Monika')); //returns true

console.log(_.uniq([2,1,3,1,2,0])); // takes an array as i/p and returns distinct value