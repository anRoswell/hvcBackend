const mysql = require('mysql')
require('dotenv').config()

const Connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
  charset: 'utf8'
});

module.exports = Connection