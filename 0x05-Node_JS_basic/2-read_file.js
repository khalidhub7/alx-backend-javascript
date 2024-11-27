const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').slice(1, -1);

    // handle lines
    const lines = [];
    for (const line of data) {
      const items = line.split(',');
      if (items.length === 4 && items.every(item => item.trim())) {
        lines.push(line);
      }
    }
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
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
