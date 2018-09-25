console.log('Starting Notes.js...');

module.exports.age = 25;  //module.exports make the variable age available when the notes.js is required 

module.exports.addNote = ()=>{

    console.log('addNote');
    return 'New Note';

}

module.exports.add = (a,b)=> {

    console.log('Inside Add Function..');

    return a+b;

}