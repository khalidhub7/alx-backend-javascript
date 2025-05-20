const { createServer } = require('http');

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

// task 5
const app = createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.statusCode = 200;
        res.end(`${data}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(['This is the list of our students',
          err.message].join('\n'));
      });
  }
}).listen(1245, 'localhost');
module.exports = app;
module.exports = countStudents;
