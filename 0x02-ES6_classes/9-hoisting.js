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

// lets change names for testing purpose
const HolbertonClass = ALXClass;
const StudentHolberton = StudentALX;

listOfStudents.forEach((current, i) => {
  const newobject = Object.create(
    StudentHolberton.prototype,
  );
  /* if (i === 0) {
    console.log(newobject);
  } */
  const data = {
    ...current,
    holbertonClass: current.alxClass,
  };
  delete data._alxClass;
  Object.assign(newobject, data);
  listOfStudents[i] = newobject;
});
export { HolbertonClass, StudentHolberton };
export default listOfStudents;
