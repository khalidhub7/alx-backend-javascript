import readDatabase from '../utils';

class StudentsController {
  // all students by field using the 'readDatabase' promise
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((data) => {
      const tobesend = [
        'This is the list of our students',
      ];

      // generate a log line
      Object.entries(data)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([k, v]) => {
          tobesend.push(
            `Number of students in ${k}: ${v.length}. \
List: ${v.join(', ')}`,
          );
        });

      response.setHeader(
        'Content-Type', 'text/plain',
      );
      response.status(200)
        .send(tobesend.join('\n'));
    }).catch((err) => {
      response.setHeader(
        'Content-Type', 'text/plain',
      );
      response.status(500).send(err.message);
    });
  }

  // الطلاب حسب التخصص
  static getAllStudentsByMajor(request, response) {
    const validmajors = ['CS', 'SWE'];
    const { major } = request.params;

    if (validmajors.includes(major)) {
      readDatabase(process.argv[2])
        .then((data) => {
          response.setHeader(
            'Content-Type', 'text/plain',
          );
          response.status(200)
            .send(`List: ${data[major].join(', ')}`);
        }).catch(() => {
          response.setHeader(
            'Content-Type', 'text/plain',
          );
          response.status(500)
            .send('Cannot load the database');
        });
    } else {
      response.setHeader(
        'Content-Type', 'text/plain',
      );
      response.status(500)
        .send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
