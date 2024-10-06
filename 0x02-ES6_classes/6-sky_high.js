import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(value) {
    if (typeof (value) === 'number') {
      this._floors = value;
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `slowly the ${this._floors} floors`;
  }
}
