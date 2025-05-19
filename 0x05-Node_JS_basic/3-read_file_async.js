const reader = require('fs');

const countStudents = async (path) => {
  try {
    const content = await reader.promises.readFile(
      path, 'utf-8',
    );
    // console.log(`*** ${content} ***`);

    // handle lines
    const lines = content.split('\n').slice(1)
      .map((line) => (line.split(',')))
      .filter(((line) => (line.length === 4
        && line.every((i) => i !== ''))));

    // handle exists fields
    const fields = [
      ...new Set(lines.map((line) => line[3])),
    ];

    // log
    console.log(
      `Number of students: ${lines.length}`,
    );

    fields.forEach((field) => {
      // students by field
      const students = lines
        .filter((line) => (line[3] === field))
        .map((line) => line[0]);

      console.log(`Number of students in ${field}\
: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (err) { throw new Error('Cannot load the database'); }
};
module.exports = countStudents;
