const reader = require('fs');

const countStudents = (path) => new Promise(
  (resolve, reject) => {
    reader.readFile(path, 'utf-8', (err, data) => {
      // console.log(`*** ${data} ***`)

      if (err || data.length === 0) {
        reject((() => {
          throw new Error('Cannot load the database');
        })());
      }

      // handle lines
      const lines = data.split('\n').slice(1)
        .map((line) => (line.split(',')))
        .filter(((line) => (line.length === 4
        && line.every((i) => i !== ''))));

      // handle exists fields
      const fields = [
        ...new Set(lines.map((line) => line[3])),
      ];

      // log
      console.log(
        `Number of students: ${lines.length}`,
      );

      fields.forEach((field) => {
        // students by field
        const students = lines
          .filter((line) => (line[3] === field))
          .map((line) => line[0]);

        console.log(`Number of students in ${field}\
: ${students.length}. List: ${students.join(', ')}`);
      });

      resolve(); // resolve if everything pass good
    });
  },
);
module.exports = countStudents;
