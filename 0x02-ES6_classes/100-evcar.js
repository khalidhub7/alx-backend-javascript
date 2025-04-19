import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    const rangeType = typeof (range);
    if (rangeType !== 'string'
    && rangeType !== 'undefined'
    ) { throw new TypeError('range must be a string'); }
    this._range = range;
  }

  static get [Symbol.species]() { return Car; }
}
export default EVCar;
