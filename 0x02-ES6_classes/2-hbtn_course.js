class ALXCourse {
  constructor(name = '', length = 0, students = []) {
    if (typeof (name) !== 'string') {
      throw new TypeError(
        'Name must be a string',
      );
    }
    this._name = name;
    if (typeof (length) !== 'number') {
      throw new TypeError(
        'Length must be a number',
      );
    }
    this._length = length;
    if (!Array.isArray(students)
     || !students.every((i) => typeof (i) === 'string')) {
      throw new TypeError(
        'Students must be a array of string',
      );
    }
    this._students = students;
  }

  set name(newvalue) {
    if (typeof (newvalue) === 'string') {
      this._name = newvalue;
    } else {
      throw new TypeError(
        'Name must be a string',
      );
    }
  }

  set length(newvalue) {
    if (typeof (newvalue) === 'number') {
      this._length = newvalue;
    } else {
      throw new TypeError(
        'Length must be a number',
      );
    }
  }

  set students(newvalue) {
    if (Array.isArray(newvalue)
     && newvalue.every((i) => typeof (i) === 'string')) {
      this._students = newvalue;
    } else {
      throw new TypeError(
        'Students must be an array of strings',
      );
    }
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }
}
export default ALXCourse;
