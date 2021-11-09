import BaseClass from '../../helpers/BaseClass';
import Card from './Card';

export default class Navigation extends BaseClass {
  public _data: any;

  constructor() {
    super();
    this._data.cardNavigations = [];
  }

  pushCard(card: Card) {
    if (card instanceof Card === false) {
      throw new Error('Invalid value passed for "pushCard"');
    }
    this._data.cardNavigations.push({ pushCard: card.getData() });
    return this;
  }

  updateCard(card: Card) {
    if (card instanceof Card === false) {
      throw new Error('Invalid value passed for "updateCard"');
    }
    this._data.cardNavigations.push({ updateCard: card.getData() });
    return this;
  }

  popCard() {
    this._data.cardNavigations.push({ popCard: null });
    return this;
  }
}
