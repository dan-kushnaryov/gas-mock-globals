import set from 'lodash.set';
import Action from './Action';
import AuthorizationAction from './AuthorizationAction';
import OpenLink from './OpenLink';
import Widget from './Widget';

export default class Button extends Widget {
  public _data: any;

  setAuthorizationAction(action: AuthorizationAction) {
    if (action instanceof AuthorizationAction === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"');
    }

    set(this._data, 'onClick.action', action.getData());

    return this;
  }

  setOnClickAction(action: Action) {
    if (action instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    set(this._data, 'onClick.action', action.getData());

    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    set(this._data, 'onClick.openLink', openLink.getData());

    return this;
  }
}
