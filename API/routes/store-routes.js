module.exports = {

  getStores : function(app, sql, poolPromise) {
    app.get('/Stores', async(request, response) => {

    });
  },

  getStore : function(app, sql, poolPromise) {
    app.get('/Stores/:id', async(request, response) => {

    });
  },

  postStore : function(app, sql, poolPromise) {
    app.post('/Stores', async(request, response) => {

    });
  },

  putStore : function(app, sql, poolPromise) {
    app.put('/Stores', async(request, response) => {

    });
  },

  deleteStore : function(app, sql, poolPromise) {
    app.delete('/Stores', async(request, response) => {

    });
  }
}
