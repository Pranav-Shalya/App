const express= require('express');


//express app

const app = express();
app.set('view engine','ejs');


app.listen(2000);

app.get('/index', (req,res)=>{
    res.render('index');

});

app.get('/404',(req,res)=>{
    res.render('404');

});
