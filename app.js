const express = require('express');

// express app
const app= express();

//listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
   // res.send('<p>Home page</p>');
   res.sendFile('./index.html',{root: __dirname});
});

app.get('/about',(req,res)=>{
   // res.send('<p>about page</p>');
   res.sendFile('./about.html',{root: __dirname});

});

app.get('/achievement',(req,res)=>{
   // res.send('<p>achievement page</p>');
   res.sendFile('./achievement.html',{root: __dirname});
});

app.get('/404',(req,res)=>{
    //res.send('<p>404 page</p>');
    res.sendFile('./404.html',{root: __dirname});
});


//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

app.get('/project',(req,res)=>{
    res.redirect('/achievement');
})