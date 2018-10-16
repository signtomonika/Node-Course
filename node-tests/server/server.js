const express = require('express');

var app = express();

app.get('/', (req, res) => {

    res.status(404).send({

        error: 'Page not found',
        name: 'Todo App v1.0'

    });

});

app.get('/users', (req, res) => {

    var user = [
        {
            name: 'Tubby',
            age: 4
        },

        {
            name: 'Tian',
            age: 22
        },

        {
            name: 'Mei',
            age: 20
        }
    ];


    res.status(200).send(user);

});

app.listen(3000, () => {
    console.log('Server starting at port 3000....');
});

module.exports.app = app;