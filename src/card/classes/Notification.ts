export default class Notification {
  public _data: { text?: string };

  constructor() {
    this._data = {};
  }

  setText(text: string) {
    this._data.text = text;
    return this;
  }
}
