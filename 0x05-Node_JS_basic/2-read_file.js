const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');

    if (lines.length < 2) throw new Error('No student data available');

    // Extract header and validate rows
    const header = lines[0].split(',');
    if (header.length !== 4) throw new Error('Invalid data format');

    const studentData = lines.slice(1).filter(line => line.split(',').length === 4);

    console.log(`Number of students: ${studentData.length}`);

    const fieldMap = {};

    for (const line of studentData) {
      const [name, , , field] = line.split(',');
      if (!fieldMap[field]) fieldMap[field] = [];
      fieldMap[field].push(name);
    }

    for (const [field, students] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database:', error.message);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
