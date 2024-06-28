export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hit) {
    if (hit === 'number') {
      return this.size;
    }
    if (hit === 'string') {
      return this.location;
    }
    return this;
  }
}
