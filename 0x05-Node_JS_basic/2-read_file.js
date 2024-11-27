const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1, -1);

    const validLines = lines.filter((line) => {
      const items = line.split(',');
      return items.length === 4 && items.every((item) => item.trim());
    });

    console.log(`Number of students: ${validLines.length}`);

    const fields = [...new Set(validLines.map((line) => line.split(',')[3]))];

    fields.forEach((field) => {
      const students = validLines
        .filter((line) => line.split(',')[3] === field)
        .map((line) => line.split(',')[0]);

      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
