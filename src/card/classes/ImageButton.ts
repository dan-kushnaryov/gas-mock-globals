import set from 'lodash.set';
import Button from './Button';
import OpenLink from './OpenLink';

export default class ImageButton extends Button {
  public _data: any;

  setIconUrl(url) {
    this._data.url = url;

    return this;
  }

  setOpenLink(openLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    set(this._data, 'onClick.openLink', openLink.getData());

    return this;
  }
}
