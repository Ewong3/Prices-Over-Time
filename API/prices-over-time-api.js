var express = require('express');
var app = express();
var {poolPromise} = require('./db-connection');

app.get('/', async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('select * from Products');
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send('Error');
    };
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
