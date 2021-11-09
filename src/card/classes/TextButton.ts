import set from 'lodash.set';
import AuthorizationAction from './AuthorizationAction';
import Button from './Button';

export default class TextButton extends Button {
  public _data: any;

  setAuthorizationAction(action) {
    if (action instanceof AuthorizationAction === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"');
    }

    set(this._data, 'onClick.openLink', action.getData());

    return this;
  }

  setText(text) {
    this._data.text = text;
    return this;
  }

  setTextButtonStyle(style) {
    this._data.style = style;
    return this;
  }

  getData() {
    return { textButton: super.getData() };
  }
}
