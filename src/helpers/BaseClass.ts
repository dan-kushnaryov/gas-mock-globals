export default class BaseClass {
  public _data: Record<string, unknown>;

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }
}
