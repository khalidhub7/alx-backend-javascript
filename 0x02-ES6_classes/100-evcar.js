import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = typeof range === 'string' ? range : undefined;
  }

  // eslint-disable-next-line
  cloneCar() {
    return new Car();
  }
}
