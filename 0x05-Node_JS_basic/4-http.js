const { createServer } = require('node:http');

const host = 'localhost';
const port = 1245;

const app = createServer((req, response) => {
  response.statusCode = 200;
  response.end('Hello Holberton School!');
});

app.listen((port, host));

module.exports = app;
