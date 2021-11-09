import set from 'lodash.set';
import TextButtonStyle from '../enums/TextButtonStyle';
import AuthorizationAction from './AuthorizationAction';
import Button from './Button';

export default class TextButton extends Button {
  public _data!: { text?: string; style?: TextButtonStyle } & Button['_data'];

  constructor() {
    super();
    this._data = {
      style: TextButtonStyle.TEXT,
      ...this._data,
    };
  }

  setAuthorizationAction(action: AuthorizationAction) {
    if (action instanceof AuthorizationAction === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"');
    }

    set(this._data, 'onClick.openLink', action.getData());

    return this;
  }

  setText(text: string) {
    this._data.text = text;
    return this;
  }

  setTextButtonStyle(style: TextButtonStyle) {
    this._data.style = style;
    return this;
  }

  getData() {
    return { textButton: super.getData() };
  }
}
