const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello ALX!');
}).listen(1245, 'localhost');
module.exports = app;
