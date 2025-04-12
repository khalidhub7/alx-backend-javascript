class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
    if (new.target !== Building
       && this.evacuationWarningMessage === undefined) {
      throw new Error(
        'Class extending Building must override'
         + ' evacuationWarningMessage',
      );
    }
  }

  set sqft(newvalue) {
    if (typeof (newvalue) !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newvalue;
  }

  get sqft() { return this._sqft; }
}
export default Building;
