const http= require('http');
const fs=require('fs');
const _= require('lodash');

const server= http.createServer((req, res)=>{
   console.log(req.url, req.method);

   //lodash
   const num=_.random(0,20);
   console.log(num);

   const greet = _.once(()=>{
    console.log('hello');
   });
   greet();
   greet();

   /*set header content type
   res.setHeader('Content-Type', 'text/html');
   res.write('<p>hello,ninjas</p>');
   res.write('<p>hello again,ninjas</p>');
   res.end();*/

/*
   res.setHeader('Content-Type','text/html');

   let path='./';
   switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode= 200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode= 200;
        break;
    case '/achievement':
         path+='achievement.html';
         res.statusCode= 200;

         break;
    case '/about-us':
        res.statusCode= 301;
        res.setHeader('Location','./about');
        break;     
    default:
        path+='404.html';
        res.statusCode= 404;
        break;
   }

   // send an html file
   fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
       
        res.end(data);
    }
   })
});



server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})