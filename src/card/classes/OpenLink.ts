import BaseClass from '../../helpers/BaseClass';
import OpenAs from '../enums/OpenAs';

export default class OpenLink extends BaseClass {
  public _data: any;

  setUrl(url: string) {
    this._data.url = url;

    return this;
  }

  setOpenAs(openAs: OpenAs) {
    this._data.openAs = openAs;

    return this;
  }
}
