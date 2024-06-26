const http=require('http');
const fs= require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=>{
  console.log('request made');
});
server.listen(2000,'localhost',()=>{
console.log('listening for requests on port 2000');
})
