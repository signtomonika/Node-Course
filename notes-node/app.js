console.log('Starting app.js..');

const yargs = require('yargs');

const notes = require('./notes.js');

/* Defining Arguments to print when help is used */

const titleOptions = {
    describe: 'Title of Note',
    demand: true,   //mandatory?
    alias: 't'  //flag version ; -t can be used instead of --title
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,   //mandatory?
    alias: 'b'  //flag version ; -t can be used instead of --title ; suggested command: node app.js add -t secret2 -b "secret 2"
};


const argv = yargs
    .command('add', 'Add a new note', {  // Options object ; prints the below with help command
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()  //--help command can be used with node app.js
    .argv;


/** Fetching command to process respective function */

var command = argv._[0];

console.log('command : ', command);

console.log('Yargs argv ', argv);

if (command === 'add') {

    // input : node app.js add --title=secret --body="This is my secret"

    var noteSaved = notes.addNote(argv.title, argv.body);

    if (noteSaved) {

        console.log('Note Saved')

        notes.logNote(noteSaved);

    } else {

        console.log(`Note not saved - Title ${argv.title} already taken`);

    }

} else if (command === 'list') {

    //input: node app.js list

    notes.getAll();

} else if (command === 'read') {

    //input : node app.js read --title secret

    var note = notes.getNote(argv.title);

    if (note) {

        console.log('Note Found');
        notes.logNote(note);

    } else {

        console.log(`Note with Title ${argv.title} is not found`);

    }

} else if (command === 'remove') {

    //input : node app.js remove --title secret

    var removeStatus = notes.removeNote(argv.title);

    var message = removeStatus ? `Note with title ${argv.title} removed successfully` : `No matching note with title ${argv.title} is found`

    console.log(message);


} else {
    console.log('Command not recognized');
}