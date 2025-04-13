class Airport {
  constructor(name, code) {
    [name, code].forEach((i) => {
      if (typeof i !== 'string') {
        throw new TypeError(
          `${i} must be a string`,
        );
      }
    });
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
export default Airport;
