import Widget from './Widget';

export default class Image extends Widget {
  public _data: any;

  setImageUrl(url: string) {
    this._data.url = url;

    return this;
  }
}
