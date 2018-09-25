console.log('Starting app.js..');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs'); //gets arguments as key value pair

const notes = require('./notes.js');

//console.log(process.argv); // argv => argument vector => gives access to the command line arguments

const argv = yargs.argv;

//var command = process.argv[2];

var command = argv._[0];

console.log('command : ', command);

//console.log('Process argv ', process.argv);

console.log('Yargs argv ', argv);

if (command === 'add') {
    //  console.log('Adding new note');

    // input : node app.js add --title=secret --body="This is my secret"

    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

    //input: node app.js list

    //console.log('Listing all notes');

    notes.getAll();

} else if (command === 'read') {

    //input : node app.js read --title secret

    //console.log('Reading note');

    notes.getNote(argv.title);

} else if (command === 'remove') {

    //input : node app.js remove --title secret

    //console.log('Removing note');

    notes.removeNote(argv.title);

} else {
    console.log('Command not recognized');
}