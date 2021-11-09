import Button from './Button';
import Widget from './Widget';

export default class ButtonSet extends Widget {
  public _data: any;

  constructor() {
    super();
    this._data.buttons = [];
  }

  addButton(button: Button) {
    if (button instanceof Button === false) {
      throw new Error('Invalid value passed for "addButton"');
    }

    this._data.buttons.push(button.getData());

    return this;
  }
}
