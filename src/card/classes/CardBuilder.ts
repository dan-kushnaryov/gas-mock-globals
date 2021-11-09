import Card from './Card';
import CardAction from './CardAction';

export default class CardBuilder {
  public _card: any;

  constructor() {
    this._card = new Card();
  }

  addCardAction(cardAction: CardAction) {
    this._card.addCardAction(cardAction);

    return this;
  }

  setName(name) {
    this._card.setName(name);

    return this;
  }

  setHeader(header) {
    this._card.setHeader(header);

    return this;
  }

  addSection(section) {
    this._card.addSection(section);

    return this;
  }

  build() {
    return this._card;
  }
}
