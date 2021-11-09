import Card from './Card';
import OpenLink from './OpenLink';

export default class UniversalActionResponseBuilder {
  public _data: {
    cards?: Card[];
    openLink?: OpenLink;
  };

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }

  build() {
    return this.getData();
  }

  displayAddOnCards(cards = []) {
    this._data.cards = cards;

    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    this._data.openLink = openLink;

    return this;
  }
}
