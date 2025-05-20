const express = require('express');
// const { countStudents } = require('./5-http');

// edited countStudents to return result instead of log
const reader = require('fs');

const countStudents = async (path) => {
  try {
    const content = await reader.promises.readFile(
      path, 'utf-8',
    );
    // console.log(`*** ${content} ***`);

    // handle lines
    const lines = content
      .split('\n').slice(1)
      .map((line) => (line.split(',')))
      .filter(((line) => (
        line.length === 4 && line.every((i) => i !== '')
      )));

    // handle exists fields
    const fields = [
      ...new Set(lines.map((line) => line[3])),
    ];

    const logs = [
      'This is the list of our students',
      `Number of students: ${lines.length}`,
    ];

    fields.forEach((field) => {
      // students by field
      const students = lines
        .filter((line) => (line[3] === field))
        .map((line) => line[0]);

      logs.push(
        `Number of students in ${field}: ${students.length}. \
List: ${students.join(', ')}`,
      );
    });
    return logs.join('\n');
  } catch (err) { throw new Error('Cannot load the database'); }
};

const app = express();

app
  .get('/', (req, res) => {
    res.status(200).send(
      'Hello Holberton School!',
    );
  })
  .get('/students', (req, res) => {
    countStudents(process.argv[2])
    // always specify Content-Type
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
  }).listen(1245, 'localhost');
module.exports = app;
