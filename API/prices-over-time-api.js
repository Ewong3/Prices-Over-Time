var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended : true}));
var {sql, poolPromise} = require('./db-connection');

var productRoutes = require('./product-routes');
productRoutes.getProducts(app, sql, poolPromise);
productRoutes.getProduct(app, sql, poolPromise);
productRoutes.postProduct(app, sql, poolPromise);
productRoutes.putProduct(app, sql, poolPromise);
productRoutes.deleteProduct(app, sql, poolPromise);

var storeRoutes = require('./store-routes');

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
