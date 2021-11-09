import set from 'lodash.set';
import Button from './Button';
import OpenLink from './OpenLink';

export default class ImageButton extends Button {
  public _data!: { url?: string } & Button['_data'];

  constructor() {
    super();
  }

  setIconUrl(url: string) {
    this._data.url = url;

    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    set(this._data, 'onClick.openLink', openLink.getData());

    return this;
  }
}
