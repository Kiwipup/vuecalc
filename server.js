/* var express= require('express');
var app= express();
var port= process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.listen(port, function(){}); */

// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
