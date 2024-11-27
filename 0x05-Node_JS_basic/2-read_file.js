const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const len = (data.split('\n').length) - 2;
    const fields = [];

    for (const line of data.split('\n')) {
      if (line !== '') {
        const field = line.split(',')[3];
        if (field !== undefined &&
            field !== 'field' &&
            !fields.includes(field)) {
          fields.push(field);
        }
      }
    }

    console.log(`Number of students: ${len}`);

    for (const field of fields) {
      if (field !== '') {
        const students = [];
        for (const line of data.split('\n').slice(1)) {
          if (line !== '') {
            // eslint-disable-next-line no-unused-vars
            for (const _ of line.split(',')) {
              if (line.split(',').length === 4) {
                if (line.split(',')[3] === field &&
                        !students.includes(line.split(',')[0])
                ) {
                  students.push(line.split(',')[0]);
                }
              }
            }
          }
        }

        console.log(`Number of students in \
${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
