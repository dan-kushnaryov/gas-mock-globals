import Widget from './Widget';

export default class Image extends Widget {
  public _data: any;

  setImageUrl(url) {
    this._data.url = url;

    return this;
  }
}
