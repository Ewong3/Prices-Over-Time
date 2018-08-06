var express = require('express');
var parser = require('body-parser');
var path = require("path");
var engines = require('consolidate');
require('handlebars');

var app = express();

app.set('views', __dirname + '/html');
app.engine('html', engines.handlebars);
app.set('view engine', 'html');
app.use(express.static( __dirname + '' ));

app.use(parser.json());
app.use(parser.urlencoded({extended : true}));

app.set('views', path.join(__dirname, 'html'));

app.get('/Products', (request, response) => {
  response.render('product.html');
});

app.get('/Product/:id', (request, response) => {
  var id = request.params.id;

  response.render('product.html', { id : id });
});


https://stackoverflow.com/questions/19254029/angularjs-http-post-does-not-send-data
var server = app.listen(5001, function () {
    console.log('Prices-Over-Time application server is running..');
});
