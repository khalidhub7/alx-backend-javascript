export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  set year(value) {
    this._year = (typeof value === 'number') ? value : 0;
  }

  set location(value) {
    this._location = (typeof value === 'string') ? value : '';
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
    this._firstName = (typeof value === 'string') ? value : '';
  }

  set lastName(value) {
    this._lastName = (typeof value === 'string') ? value : '';
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set holbertonClass(value) {
    this._holbertonClass = (value instanceof HolbertonClass) ? value : null;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return this._holbertonClass 
      ? `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}` 
      : `${this._firstName} ${this._lastName} - No class assigned`;
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
