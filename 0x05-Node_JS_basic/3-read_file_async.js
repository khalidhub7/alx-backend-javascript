const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path, 'utf8',
      (err, data) => {
        // handles I/O errors
        if (err) {
          return reject(new Error(
            'Cannot load the database',
          ));
        }

        try {
          const lines = data.split('\n').slice(1).filter(
            (line) => line.trim() !== '',
          );
          console.log(`Number of students: ${lines.length}`);

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
            console.log(`Number of students in ${field}\
: ${students.length}. List: ${students.join(', ')}`);
          }
          // resolve returned when processing is done
          return resolve();
        } catch (error) {
          return reject(new Error(
            'Cannot load the database',
          ));
        }
      },
    );
  });
}

module.exports = countStudents;
