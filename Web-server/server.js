const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('year', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.set('view engine', 'hbs');


//next indicates if the middleware function is done

app.use((req, res, next) => {

    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`

    console.log(log);

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    })

    next();
});

//maintenance page as middleware

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// })

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {

    res.render('home.hbs', {

        pageTitle: 'Home Page',
        message: 'Welcome to Home Page'
    })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {

    res.send({
        errorMessage: 'Page Not Found!'
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000..')
});