var express = require('express');
var parser = require('body-parser');
var path = require("path");

var app = express();
app.use(express.static( __dirname + '' ));
app.use(parser.json());
app.use(parser.urlencoded({extended : true}));

app.get('/Products', (request, response) => {
  response.sendFile(path.join(__dirname+'/html/products.html'));
});

https://stackoverflow.com/questions/19254029/angularjs-http-post-does-not-send-data
var server = app.listen(5001, function () {
    console.log('Prices-Over-Time application server is running..');
});
