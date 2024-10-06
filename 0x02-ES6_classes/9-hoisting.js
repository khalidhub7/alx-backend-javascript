export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  set year(value) {
    if (!value) {
      this._year = 0;
    }
    if (typeof (value) === 'number') {
      this._year = value;
    }
    if (typeof (value) !== 'number') {
      this._year = 0;
    }
  }

  set location(value) {
    if (!value) {
      this._location = '';
    }
    if (typeof (value) === 'string') {
      this._location = value;
    }
    if (typeof (value) !== 'string') {
      this._location = '';
    }
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
export default class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  set firstName(value) {
    if (!value) {
      this._firstName = '';
    }
    if (typeof (value) === 'string') {
      this._firstName = value;
    }
    if (typeof (value) !== 'string') {
      this._firstName = '';
    }
  }

  set lastName(value) {
    if (!value) {
      this._lastName = '';
    }
    if (typeof (value) === 'string') {
      this._lastName = value;
    }
    if (typeof (value) !== 'string') {
      this._lastName = '';
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set holbertonClass(value) {
    if (!value) {
      this._holbertonClass = {};
    }
    if (value instanceof HolbertonClass) {
      this._holbertonClass = value;
    }
    if (!(value instanceof HolbertonClass)) {
      this._holbertonClass = {};
    }
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
