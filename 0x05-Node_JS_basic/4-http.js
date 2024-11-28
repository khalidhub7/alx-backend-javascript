const { createServer } = require('http');

const app = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain')
  response.end('Hello Holberton School!');
});

app.listen((port, 'localhost'));

module.exports = app;
