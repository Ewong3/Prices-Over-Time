var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended : true}));
var {sql, poolPromise} = require('./db-connection');

var productRoutes = require('./routes/product-routes');
productRoutes.getProducts(app, sql, poolPromise);
productRoutes.getProduct(app, sql, poolPromise);
productRoutes.postProduct(app, sql, poolPromise);
productRoutes.putProduct(app, sql, poolPromise);
productRoutes.deleteProduct(app, sql, poolPromise);

var storeRoutes = require('./routes/store-routes');
storeRoutes.getStores(app, sql, poolPromise);
storeRoutes.getStore(app, sql, poolPromise);
storeRoutes.postStore(app, sql, poolPromise);
storeRoutes.putStore(app, sql, poolPromise);
storeRoutes.deleteStore(app, sql, poolPromise);

var server = app.listen(5000, function () {
    console.log('Prices-Over-Time API server is running..');
});
