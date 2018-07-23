var express = require('express');
var app = express();
var {poolPromise} = require('./db-connection');

// Get all products
app.get('/Products', async (request, response) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('SELECT * FROM Products');
      response.send(result);

    } catch (err) {
      console.log(err);
      response.status(500);
      response.send('Error');
    };
});

// Get a single product given an product id
app.get('/Product', async (request, response) => {
  try {
    const pool = await poolPromise;
    // Get product by product id
    const result = await pool.request()
      .input('product_id', sql.Int, 2)
      .query('SELECT * FROM Products WHERE ProductID = @product_id');
    response.send(result);
  } catch (err) {
    console.log(err);
    response.status(500);
    response.send('Error');
  }

});

// Add a new product into the database
app.post('/Product', async (request, response) => {
  try {
    const pool = await poolPromise;
    // Add new product
  } catch (err) {
    console.log(err);
    response.status(500);
    response.send('Error');
  }

});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
