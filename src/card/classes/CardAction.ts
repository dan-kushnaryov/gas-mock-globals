import set from 'lodash.set';
import Action from './Action';
import OpenLink from './OpenLink';

export default class CardAction {
  public _data: {
    actionLabel?: string;
    onClick?: {
      action?: ReturnType<Action['getData']>;
      openLink?: ReturnType<OpenLink['getData']>;
    };
  } = {};

  getData() {
    return this._data;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    set(this._data, 'onClick.openLink', openLink.getData());

    return this;
  }

  setText(text: string) {
    this._data.actionLabel = text;

    return this;
  }

  setOnClickAction(action: Action) {
    if (action instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    set(this._data, 'onClick.action', action.getData());

    return this;
  }
}
