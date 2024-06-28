export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * creates the full string output of currency
   * @ return {Strin}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
