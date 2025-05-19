const { createServer } = require('node:http');

const app = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(1245, 'localhost');

module.exports = app;
