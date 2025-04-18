class Car {
  constructor(brand, motor, color) {
    [brand, motor, color].forEach((i) => {
      if (typeof (i) !== 'string'
      ) { throw new TypeError(`${i} must be a string`); }
    });
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new (this.constructor)(
      this._brand, this._motor, this._color,
    );
  }
}
export default Car;
