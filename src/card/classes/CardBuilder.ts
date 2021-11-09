import Card from './Card';
import CardAction from './CardAction';
import CardHeader from './CardHeader';
import CardSection from './CardSection';

export default class CardBuilder {
  public _card: any;

  constructor() {
    this._card = new Card();
  }

  addCardAction(cardAction: CardAction) {
    this._card.addCardAction(cardAction);

    return this;
  }

  setName(name: string) {
    this._card.setName(name);

    return this;
  }

  setHeader(header: CardHeader) {
    this._card.setHeader(header);

    return this;
  }

  addSection(section: CardSection) {
    this._card.addSection(section);

    return this;
  }

  build() {
    return this._card;
  }
}
