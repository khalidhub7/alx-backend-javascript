const express = require('express');
const { countStudents } = require('./5-http');

const app = express();

app
  .get('/', (req, res) => {
    res.status(200).send(
      'Hello Holberton School!',
    );
  })
  .get('/students', (req, res) => {
    countStudents(process.argv[2])
    // express ignores '\n', use '<br>' instead
      .then((data) => {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(`${data}`);
      })
      .catch((err) => {
        res.setHeader('Content-Type', 'text/plain');
        res.status(500).send(
          ['This is the list of our students',
            err.message].join('\n'),
        );
      });
  }).listen(1246, 'localhost');
module.exports = app;
