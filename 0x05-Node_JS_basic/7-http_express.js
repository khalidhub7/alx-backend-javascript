const app = require('express')();
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  let output = '';
  const beforewrap = console.log;
  // wrap console.log function
  // so that is return instead of log
  console.log = (
    message,
  ) => { output += `${message}\n`; };

  countStudents(
    process.argv[2],
  )
    .then(() => {
      response.status(200).setHeader(
        'Content-Type', 'text/plain',
      );
      response.send(`This is the list of our \
students\n${output}`);
    })
    .catch((err) => {
      response.status(500).send(
        `This is the list of our \
students\n${err.message}`,
      );
    })
    .finally(() => {
      console.log = beforewrap;
    });
});

app.listen(port, host);

module.exports = app;
