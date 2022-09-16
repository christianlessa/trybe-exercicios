const mysql = require('mysql/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'christian',
  password: 'DownloaD22@',
  datebase: 'users_crud',
});

module.exports = connection;
