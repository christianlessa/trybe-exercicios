const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'christian',
  password: '@Admin123',
  database: 'live_lecture_23_1',
});

module.exports = connection;


// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'christian',
//     password: 'DownloaD22@',
//     database: 'live_lecture_23_1',
// });

// module.exports = connection;