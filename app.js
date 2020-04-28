const express = require('express')
var mysql = require('mysql');

const app = express()
const port = 8081

var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : '123123'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("Select * from products");
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))