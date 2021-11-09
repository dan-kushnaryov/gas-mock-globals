import set from 'lodash.set';
import BaseClass from '../../helpers/BaseClass';
import Action from './Action';
import OpenLink from './OpenLink';

export default class CardAction extends BaseClass {
  public _data: any;

  setOpenLink(openLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    set(this._data, 'onClick.openLink', openLink.getData());

    return this;
  }

  setText(text) {
    this._data.actionLabel = text;

    return this;
  }

  setOnClickAction(action) {
    if (action instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    set(this._data, 'onClick.action', action.getData());

    return this;
  }
}
