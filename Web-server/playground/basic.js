const express = require('express');

var app = express(); 

//root route setting

app.get('/',(req, res)=>{    // Path , function to execute when path is called from browser

//res.send('<h1>Hello Express!</h1>');

res.send({

    name: 'Monika',

    likes: [
        'cooking',
        'music',
        'books'
    ]

})

});

//about route setting

app.get('/about',(req, res)=>{    
    res.send('<h2>Welcome to About Page!!!</h2>');

});


//bad link route

app.get('/bad',(req,res)=>{

    res.send({
        errorMessage: 'Page Not Found!'
    })
});


//Binding application to a port

app.listen(3000);