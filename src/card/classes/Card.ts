import CardAction from './CardAction';
import CardHeader from './CardHeader';
import CardSection from './CardSection';

export default class Card {
  public _data: {
    name?: string;
    header?: ReturnType<CardHeader['getData']>;
    sections: ReturnType<CardSection['getData']>[];
    cardActions: ReturnType<CardAction['getData']>[];
  };

  constructor() {
    this._data = { sections: [], cardActions: [] };
  }

  getData() {
    return this._data;
  }

  setName(name: string) {
    // TODO: check the name of the property
    this._data.name = name;

    return this;
  }

  setHeader(header: CardHeader) {
    if (header instanceof CardHeader === false) {
      throw new Error('Invalid value passed for "setHeader"');
    }

    this._data.header = header.getData();

    return this;
  }

  addSection(section: CardSection) {
    if (section instanceof CardSection === false) {
      throw new Error('Invalid value passed for "addSection"');
    }

    this._data.sections.push(section.getData());

    return this;
  }

  addCardAction(cardAction: CardAction) {
    if (cardAction instanceof CardAction === false) {
      throw new Error('Invalid value passed for "addCardAction"');
    }

    this._data.cardActions.push(cardAction.getData());

    return this;
  }

  printJson() {
    return this.getData();
  }
}
