import OpenAs from '../enums/OpenAs';

export default class OpenLink {
  public _data: { url?: string; openAs?: OpenAs };

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }

  setUrl(url: string) {
    this._data.url = url;

    return this;
  }

  setOpenAs(openAs: OpenAs) {
    this._data.openAs = openAs;

    return this;
  }
}
