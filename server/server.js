var express = require('express');


const server = new express();

 server.get('/', (req, res) => {
    res.render('./../web/public/index.ejs',{});
 }).listen(7777);;
