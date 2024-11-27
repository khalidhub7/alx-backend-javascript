const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() && line.split(',').length === 4);
    
    const len = lines.length - 1; // Exclude header
    const fields = [...new Set(lines.slice(1).map(line => line.split(',')[3]))];

    console.log(`Number of students: ${len}`);

    fields.forEach(field => {
      const studentsByField = lines.slice(1)
        .filter(line => line.split(',')[3] === field)
        .map(line => line.split(',')[0]);

      console.log(`Number of students in ${field}: ${studentsByField.length}. List: ${studentsByField.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
