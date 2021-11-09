import BaseClass from '../../helpers/BaseClass';

export default class OpenLink extends BaseClass {
  public _data: any;

  setUrl(url) {
    this._data.url = url;

    return this;
  }

  setOpenAs(openAs) {
    this._data.openAs = openAs;

    return this;
  }
}
