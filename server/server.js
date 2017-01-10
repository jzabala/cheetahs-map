var express = require('express');
var path = require('path');
var parser = require('body-parser');
var db = require('./db.js')

var server = new express();
server.set('view engine', 'ejs');
var db_cnx = "mongodb://angel:code23@ds157248.mlab.com:57248/dev_mongodb";
var db;

db.connect(db_cnx, (err) => {
   if(err){
     console.log(err);
     process.exit(1);
   }
   else{
     var port = server.listen(3000,function(){
       console.log("listen in port"+' '+ port.address().port);
     });
   }
});

//res.render('index.ejs',{locations: result})
server.use(parser.urlencoded({extended:true}))
//sever.use('/users', require('./controllers/users'))
server.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/index.html'));
});

server.get('/signup',(req,res) =>{
  res.render('signup.ejs');
});

server.post('/signup', (req, res) => {

});

server.post('/user:id',(req,res)=>{

});






server.delete('/user:id',(req,res)=>{

});
