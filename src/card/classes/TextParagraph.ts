import Widget from './Widget';

export default class TextParagraph extends Widget {
  public _data: { text?: string };

  constructor() {
    super();

    this._data = {};
  }

  getData() {
    return this._data;
  }

  setText(text: string) {
    this._data.text = text;

    return this;
  }
}
