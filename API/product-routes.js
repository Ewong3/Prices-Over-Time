module.exports = {

  getProducts : function(app, sql, poolPromise) {
    // Get all products
    app.get('/Products', async (request, response) => {
        try {

          const pool = await poolPromise;
          const result = await pool.request().query('SELECT * FROM Products');

          console.log('Return all products');
          response.send(result);

        } catch (err) {
          console.log(err);
          response.status(500);
          response.send('Error');
        };
    });
  },

  getProduct : function(app, sql, poolPromise){
    // Get a single product given an product id
    app.get('/Products/:id', async (request, response) => {
      try {
        var id = request.params.id;

        const pool = await poolPromise;
        // Get product by product id
        const result = await pool.request()
          .input('product_id', sql.Int, id)
          .query('SELECT * FROM Products WHERE ProductID = @product_id');

        console.log('Returning product with an id of ' + id);
        response.send(result);

      } catch (err) {
        console.log(err);
        response.status(500);
        response.send('Error');
      }
    });
  },

  postProduct : function(app, sql, poolPromise) {
    // Add a new product into the database
    app.post('/Products', async (request, response) => {
      try {
        var productName = request.body.name;

        const pool = await poolPromise;
        // Add new product

        const result = await pool.request()
          .input('product_name', sql.NVarChar(50), productName)
          .query('INSERT INTO Products (Name) VALUES ( @product_name )');
        console.log('Added ' + productName + ' as a new product');
        response.send(result);

      } catch (err) {
        console.log(err);
        response.status(500);
        response.send('Error');
      }
    });
  },

  putProduct : function(app, sql, poolPromise) {
    // Update an existing product in database
    app.put('/Products', async (request, response) => {
      try {
        var id = request.body.name;

        const pool = await poolPromise;
        // Update existing product

        /*  TODO
        const result = await pool.request()
          .input('product_name', sql.NVarChar(50), productName)
          .query('INSERT INTO Products (Name) VALUES ( @product_name )');
        console.log('Added ' + productName + ' as a new product');
        response.send(result);
        */

      } catch (err) {
        console.log(err);
        response.status(500);
        response.send('Error');
      }
    });
  },

  deleteProduct : function(app, sql, poolPromise) {
    // Delete an existing product in database
    app.delete('/Products/:id', async (request, response) => {
      try {
        var id = request.body.name;

        const pool = await poolPromise;
        // Delete existing product

        /* TODO
        const result = await pool.request()
          .input('product_name', sql.NVarChar(50), productName)
          .query('INSERT INTO Products (Name) VALUES ( @product_name )');
        console.log('Added ' + productName + ' as a new product');
        response.send(result);
        */

      } catch (err) {
        console.log(err);
        response.status(500);
        response.send('Error');
      }
    });
  }

}
