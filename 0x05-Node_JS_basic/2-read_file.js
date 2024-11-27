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

    const fields = validLines.reduce((acc, line) => {
      const items = line.split(',');
      const field = items[3];
      if (!acc.includes(field)) {
        acc.push(field);
      }
      return acc;
    }, []);

    fields.forEach((field) => {
      const students = validLines
        .filter((line) => line.split(',')[3] === field)
        .map((line) => line.split(',')[0]);
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
