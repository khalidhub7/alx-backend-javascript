const fs = require('fs');

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8',
      (err, data) => {
        if (err) {
          reject(err);
        }
        const studentsbyfield = {};

        // valid lines
        const lines = [];
        for (const line of data.split(
          '\n',
        ).slice(1, -1)) {
          const items = line.split(',');
          if (items.length === 4
        && items.every((item) => item.trim())) {
            lines.push(line);
          }
        }

        // handle exists fields
        const fields = [];
        for (const line of lines) {
          const items = line.split(',');
          const field = items[3];
          if (!fields.includes(field)) {
            fields.push(field);
          }
        }

        // students by field
        for (const field of fields) {
          const students = [];
          for (const line of lines) {
            const items = line.split(',');
            if (items[3] === field) {
              students.push(items[0]);
            }
          }
          studentsbyfield[field] = students;
        }
        resolve(studentsbyfield);
      });
  });
}

module.exports = readDatabase;
