const { createServer } = require('node:http');

const host = 'localhost';
const port = 1245;

const app = createServer((_, response) => {
  response.statusCode = 200;
  response.end('Hello Holberton School!');
});

app.listen((host, port));

module.exports = app;
