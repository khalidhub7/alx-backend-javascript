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

  static get [Symbol.species]() { return this; }

  cloneCar() { return new (this.constructor[Symbol.species])(); }
}
export default Car;
