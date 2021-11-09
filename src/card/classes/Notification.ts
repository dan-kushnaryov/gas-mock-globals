import BaseClass from '../../helpers/BaseClass';

export default class Notification extends BaseClass {
  public _data: any;

  setText(text: string) {
    this._data.text = text;
    return this;
  }
}