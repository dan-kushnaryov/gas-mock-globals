import Widget from './Widget';

export default class TextParagraph extends Widget {
  public _data: any;

  setText(text) {
    this._data.text = text;

    return this;
  }
}
