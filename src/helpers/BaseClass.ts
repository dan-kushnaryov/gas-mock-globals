export default class BaseClass {
  public _data: any;

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }
}
