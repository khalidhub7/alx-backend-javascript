import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof (floors) !== 'number') {
      throw new TypeError(
        'floors must be a number',
      );
    }
    this._floors = floors;
  }

  set sqft(newvalue) {
    if (typeof (newvalue) !== 'number') {
      throw new TypeError(
        'sqft must be a number',
      );
    }
    this._sqft = newvalue;
  }

  set floors(newvalue) {
    if (typeof (newvalue) !== 'number') {
      throw new TypeError(
        'floors must be a number',
      );
    }
    this._floors = newvalue;
  }

  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly the \
${this._floors} floors`;
  }
}
export default SkyHighBuilding;
