const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'christian',
  password: 'DownloaD22@',
  database: 'model_example'
});

module.exports = connection;
