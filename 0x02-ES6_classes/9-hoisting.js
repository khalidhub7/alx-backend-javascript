class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() { return this._year; }

  get location() { return this._location; }
}

const class2019 = new ALXClass(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

class StudentALX {
  constructor(firstName, lastName, alxClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() { return this._alxClass; }

  get fullStudentDescription() {
    return `${this.fullName} \
- ${this.alxClass.year} - ${this.alxClass.location}`;
  }
}

const listOfStudents = [
  new StudentALX('Guillaume', 'Salva', class2020),
  new StudentALX('John', 'Doe', class2020),
  new StudentALX('Albert', 'Clinton', class2019),
  new StudentALX('Donald', 'Bush', class2019),
  new StudentALX('Jason', 'Sandler', class2019),
];

/* just for testing */
const HolbertonClass = ALXClass;
const StudentHolberton = StudentALX;

/* make listOfStudents use StudentHolberton
prototype and add holbertonClass */
listOfStudents.forEach((student, index) => {
  const newStudent = Object.create(StudentHolberton.prototype);
  Object.assign(newStudent, student, { holbertonClass: student.alxClass });
  listOfStudents[index] = newStudent;
});
export { HolbertonClass, StudentHolberton };
export default listOfStudents;
