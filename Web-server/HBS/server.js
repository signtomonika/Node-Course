const express = require('express');

const hbs = require('hbs');

var app = express(); 

//using partials for html tags commonly used between components

hbs.registerPartials(__dirname+'/views/partials');

//setting app to use hbs(handle bars) template engine

app.set('view engine','hbs');

//using middleware to load the html files to app

// __dirname -> variable passed onto static function from the node wrapper function -> points to project root directory

app.use(express.static(__dirname+'/public'))  //indicates to use the public folder

// using helper for common functions ; eg., Current year used in footer

hbs.registerHelper('year',()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase()
})

//root route setting

app.get('/',(req, res)=>{    // Path , function to execute when path is called from browser

    res.render('home.hbs',{

        pageTitle: 'Home Page',
        message: 'Welcome to Home Page'
    })

});

//about route setting

app.get('/about',(req, res)=>{    
   res.render('about.hbs',{
       pageTitle:'About Page'
   });
});

//bad link route

app.get('/bad',(req,res)=>{

    res.send({
        errorMessage: 'Page Not Found!'
    })
});


//Binding application to a port

app.listen(3000,()=>{
    console.log('Server is running on port 3000..')
});