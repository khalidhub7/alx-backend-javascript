const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
}).listen(1245, 'localhost');
module.exports = app;
