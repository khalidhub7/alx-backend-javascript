const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
    const len = lines.length - 1; // Exclude header line

    const fields = {};
    for (const line of lines.slice(1)) { // Skip header line
      const [firstName, lastName, age, field] = line.split(',');
      if (field && field !== 'field') {
        if (!fields[field]) {
          fields[field] = [];
        }
        if (!fields[field].includes(firstName)) {
          fields[field].push(firstName);
        }
      }
    }

    console.log(`Number of students: ${len}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
