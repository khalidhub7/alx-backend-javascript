const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const len = data.split('\n').filter(
      line => line.trim() && line.split(
        ',').length === 4).length;
    const fields = [];
    const lines = data.split('\n').filter(
        line => line.trim() !== '' && line.split(',').filter(col => col.trim()).length === 4);      

    for (const line of lines.slice(1)) {
      const field = line.split(',')[3];
      if (field &&
            !fields.includes(field)) {
        fields.push(field);
      }
    }

    console.log(`Number of students: ${len - 1}`);

    for (const field of fields) {
      if (field) {
        const studentsbyfield = [];
        for (const item of lines.slice(1)) {
          const name = item.split(',')[0];
          const current = item.split(',')[3];
          if (field === current) {
            if (!studentsbyfield.includes(name)) {
              studentsbyfield.push(name);
            }
          }
        }
        console.log(`Number of students in \
${field}: ${studentsbyfield.length}. \
List: ${studentsbyfield.join(', ')}`);
      }
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
