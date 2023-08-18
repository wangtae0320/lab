const maria = require("mysql");
require("dotenv").config();

const connect = maria.createConnection({
  host: process.env.HOST_URL,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = connect;
