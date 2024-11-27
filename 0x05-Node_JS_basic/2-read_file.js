const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').slice(1, -1);

    // Filter valid lines
    const lines = data.filter((line) => {
      const items = line.split(',');
      return items.length === 4 && items.every((item) => item.trim());
    });

    console.log(`Number of students: ${lines.length}`);

    // Extract unique fields
    const fields = [...new Set(lines.map((line) => line.split(',')[3]))];

    // Students by field
    fields.forEach((field) => {
      const students = lines
        .filter((line) => line.split(',')[3] === field)
        .map((line) => line.split(',')[0]);

      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
