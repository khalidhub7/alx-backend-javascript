export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(value) {
    if (typeof (value) === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
