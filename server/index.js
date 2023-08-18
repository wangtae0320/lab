require("dotenv").config();
const express = require("express");
const app = express();
// const router = express.Router();

const maria = require("./database/mariaDB");
maria.connect();

app.get("/", function (req, res) {
  res.send("true");
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});

app.get("/select", function (req, res, next) {
  maria.query("SELECT * FROM user", function (err, rows, fields) {
    if (!err) {
      console.log("success");
      res.send(rows);
    } else {
      console.log("err : " + err);
    }
  });
});
