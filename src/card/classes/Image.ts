import Widget from './Widget';

export default class Image extends Widget {
  public _data: {
    url?: string;
  };

  constructor() {
    super();
    this._data = {};
  }

  getData() {
    return this._data;
  }

  setImageUrl(url: string) {
    this._data.url = url;

    return this;
  }
}
