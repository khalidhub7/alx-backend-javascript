const { createServer } = require('http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(1245, 'localhost');

module.exports = app;
