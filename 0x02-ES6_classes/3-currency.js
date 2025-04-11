class Currency {
  constructor(code = '', name = '') {
    if (typeof (code) !== 'string') {
      throw new TypeError(
        'Code must be a string',
      );
    }
    this._code = code;
    if (typeof (name) !== 'string') {
      throw new TypeError(
        'Name must be a string',
      );
    }
    this._name = name;
  }

  set code(newvalue) {
    if (typeof (newvalue) === 'string') {
      this._code = newvalue;
    } else {
      throw new TypeError(
        'Code must be a string',
      );
    }
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

  get code() { return this._code; }

  get name() { return this._name; }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
