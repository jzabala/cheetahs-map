var express = require('express');
var path = require('path');
var React = require('react');
//var view  = require(path.join(__dirname,'../web/src'));
//var React = require('react-dom/server');


var server = new express();

server.set('view engine', 'html');
server.use(express.static(path.join(__dirname, '../web/src')));

server.set('view engine', 'html');
server.use(express.static(path.join(__dirname, '../web/src')));

server.post('/user:id',(res,req)=>{

});
server.post('/user',(res,req)=>{

});
server.delete('/user',(res,req)=>{

});

var port = server.listen(3000,function(){
  console.log("listen in port"+' '+ port.address().port);
});
