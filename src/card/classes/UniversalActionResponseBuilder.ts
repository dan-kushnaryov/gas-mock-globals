import BaseClass from '../../helpers/BaseClass';
import OpenLink from './OpenLink';

export default class UniversalActionResponseBuilder extends BaseClass {
  public getData: any;
  public _data: any;

  build() {
    return this.getData();
  }

  displayAddOnCards(cards = []) {
    this._data.cards = cards;

    return this;
  }

  setOpenLink(openLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    this._data.openLink = openLink;

    return this;
  }
}
