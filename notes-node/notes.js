console.log('Starting Notes.js...');

const fs = require('fs');

var fetchNotes = () => {

    try {

        console.log('Reading the File....');

        var notesString = fs.readFileSync('notes-data.json');

        return JSON.parse(notesString);

    } catch (err) {

        console.log('Empty or No File found');

        return [];

    }

};

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) => {

    var notes = [];

    var note = {
        title,
        body
    };

    //reading existing file to avoid data loass when written

    notes = fetchNotes();

    // Avoid duplicate title

    //filter() calls the callback function in the argument for each element in the array.

    //It returns the array element that matches the condition specified in the call back function

    var duplicateNotes = notes.filter((note) => note.title === title);

    //console.log(duplicateNotes);

    if (duplicateNotes.length === 0) {

        notes.push(note);

        saveNotes(notes);

        return note;

        console.log('Writing the File....');

    } else {

        console.log('Duplicate Title.. ');
    }



};

var getAll = () => {

    var fetchedNotes = fetchNotes();

    var i = 1;

    console.log(`Printing ${fetchedNotes.length} note(s)..`);

    fetchedNotes.forEach(note => {

        console.log(`Note ${i}`);
        logNote(note);
        i++;
    });

}

var getNote = (title) => {

    var fetchedNotes = fetchNotes();

    var newNotes = fetchedNotes.filter(
        (note) => note.title === title
    );


    return newNotes[0];

}

var removeNote = (title) => {

    var fetchedNotes = fetchNotes();

    var newNotes = fetchedNotes.filter(
        (note) => note.title !== title
    );

    saveNotes(newNotes);

    return newNotes.length !== fetchedNotes.length;

}

var logNote = (note) => {

    debugger; //line break when using inspect (debug mode)

    console.log('-------------');
    console.log('Title : ', note.title);
    console.log('Body : ', note.body);

}

module.exports = {

    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};