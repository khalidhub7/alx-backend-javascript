export default class Building {
  constructor (sqft) {
    if (this.constructor.name != 'Building') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override e\
vacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  set sqft (value) {
    if (typeof (value) === 'number') {
      this._sqft = value;
    }
  }

  get sqft () {
    return this._sqft;
  }
}
