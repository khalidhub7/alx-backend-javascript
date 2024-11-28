const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';
const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    let output = '';
    const beforewrap = console.log;
    // wrap console.log function
    // so that is return instead of log
    console.log = (
      message,
    ) => { output += `${message}\n`; };

    countStudents(
      argv[2],
    )
      .then(() => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(`This is the list of our \
students\n${output}`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.end(`This is the list of our \
students\n${err.message}`);
      })
      .finally(() => {
        console.log = beforewrap;
      });
  }
});

app.listen(port, host);

module.exports = app;
