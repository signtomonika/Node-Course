const fs = require('fs');

var originalNote = {

    title: 'Some Title',
    body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFile('notes.json',originalNoteString,(err)=>{

    if(err){

        console.log('Error while writing file');

    }else {

        console.log("File write Success!");
    }

});

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);

console.log(note.title);