module.exports = {

  productsPage : function(app) {
    app.get('/Products', (request, response) => {
      response.render('products.html');
    });
  },

  productPage : function(app) {
    app.get('/Product/:id', (request, response) => {
      var id = request.params.id;

      response.render('product.html', { id : id });
    });
  }
}
