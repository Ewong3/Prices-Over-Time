module.exports = {

  getProducts : function(app, sql, poolPromise) {
    // Get all products
    app.get('/Products', async (request, response) => {
        try {

          const pool = await poolPromise;
          const result = await pool.request().query('SELECT * FROM Products');

          var obj = {};
          obj['products'] = result.recordsets[0];
          obj['rows'] = result.rowsAffected[0];

          console.log('Return all products');
          response.status(200);
          response.contentType('application/json')
          response.send(JSON.stringify(obj));

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

        var obj = {};
        obj['products'] = result.recordsets[0];
        obj['rows'] = result.rowsAffected[0];

        console.log('Returning product with an id of ' + id);
        response.status(200);
        response.contentType('application/json')
        response.send(JSON.stringify(obj));

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
        var name = request.body.name;

        const pool = await poolPromise;
        // Add new product

        const result = await pool.request()
          .input('product_name', sql.NVarChar(50), name)
          .query('INSERT INTO Products (Name) OUTPUT Inserted.ProductID, Inserted.Name VALUES ( @product_name )');

        var obj = {};
        obj['products'] = result.recordsets[0];
        obj['rows'] = result.rowsAffected[0];

        console.log('Added ' + name + ' as a new product');
        response.status(200);
        response.contentType('application/json')
        response.send(JSON.stringify(obj));

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
        var name = request.body.name;
        var id = request.body.id;

        const pool = await poolPromise;
        // Update existing product

        const result = await pool.request()
          .input('product_name', sql.NVarChar(50), name)
          .input('product_id', sql.Int, id)
          .query('UPDATE Products SET Name = @product_name OUTPUT Inserted.ProductID, Inserted.Name WHERE ProductID = @product_id');

        var obj = {};
        obj['products'] = result.recordsets[0];
        obj['rows'] = result.rowsAffected[0];

        console.log('Updated product ' + id + ' as ' + name);
        response.status(200);
        response.contentType('application/json')
        response.send(JSON.stringify(obj));

      } catch (err) {
        console.log(err);
        response.status(500);
        response.send('Error');
      }
    });
  },

  deleteProduct : function(app, sql, poolPromise) {
    // Delete an existing product in database
    app.delete('/Products', async (request, response) => {
      try {
        var id = request.body.id;

        const pool = await poolPromise;
        // Delete existing product

        const result = await pool.request()
          .input('product_id', sql.NVarChar(50), id)
          .query('DELETE FROM Products OUTPUT Deleted.ProductID, Deleted.Name WHERE ProductID = @product_id');

        var obj = {};
        obj['products'] = result.recordsets[0];
        obj['rows'] = result.rowsAffected[0];

        console.log('Deleted product ' + id);
        response.status(200);
        response.contentType('application/json')
        response.send(JSON.stringify(obj));

      } catch (err) {
        console.log(err);
        response.status(500);
        response.send('Error');
      }
    });
  }

}
