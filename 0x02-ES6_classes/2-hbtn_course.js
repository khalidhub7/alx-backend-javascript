export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = String(value);
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof (value) === 'number') {
      this._length = Number(value);
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = (value);
    } else {
      throw TypeError('students must be a array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
