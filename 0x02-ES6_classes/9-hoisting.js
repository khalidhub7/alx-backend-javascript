class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() { return this._year; }

  get location() { return this._location; }
}

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

// let's adapt class names to match test requirements
class HolbertonClass extends ALXClass {}
class StudentHolberton extends StudentALX {
  constructor(firstName, lastName, alxClass) {
    super(firstName, lastName, alxClass);
    this.holbertonClass = this._alxClass;
    delete this._alxClass;
  }

  get alxClass() { return this.holbertonClass; }
}
// let's create test instances
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');
const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', class2020),
  new StudentHolberton('John', 'Doe', class2020),
  new StudentHolberton('Albert', 'Clinton', class2019),
  new StudentHolberton('Donald', 'Bush', class2019),
  new StudentHolberton('Jason', 'Sandler', class2019),
];

export { HolbertonClass, StudentHolberton };
export default listOfStudents;
