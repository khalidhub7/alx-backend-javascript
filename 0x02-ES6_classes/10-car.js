class Car {
  constructor(brand, motor, color) {
    [brand, motor, color].forEach((i) => {
      if (typeof (i) !== 'string' && i !== undefined
      ) { throw new TypeError(`${i} must be a string`); }
    });
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /*
  cloneCar() returns a new object from
  the class specified by [Symbol.species]
  */
  static get [Symbol.species]() { return this; }

  /*
  - gets class from [Symbol.species], falls back to
  parent's [Symbol.species] if not overridden in child classes.
  - this.constructor is a class, [Symbol.species] is a static method
  that returns the class
  */
  cloneCar() {
    const ClassToClone = this.constructor[Symbol.species];
    return new ClassToClone();
  }
}
export default Car;
