export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error(`${this.constructor.name} must override evacuationWarningMessage`);
  }
}
