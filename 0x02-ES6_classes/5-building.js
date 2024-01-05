export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqrt must be a number');
    }
    if (this.constructor !== Building && typeof
    this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqrt() { return this._sqft; }
}
