var sql = require("mssql");

var config = {
    user: 'USER',
    password: 'PASSWORD',
    server: 'LOCALHOST',
    database: 'DATABASE'
};

const poolPromise = new sql.ConnectionPool(config).connect().then(pool => {
  console.log('Connected to db');
  return pool
}).catch(err => console.log('Failed to connect to db'));

module.exports = {sql, poolPromise};
