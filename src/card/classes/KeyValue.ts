import set from 'lodash.set';
import Action from './Action';
import Button from './Button';
import OpenLink from './OpenLink';
import Widget from './Widget';

export default class KeyValue extends Widget {
  public _data: {
    bottomLabel?: string;
    content?: string;
    iconUrl?: string;
    multiline?: boolean;
    onClick?: { action: Action };
    openLink?: ReturnType<OpenLink['getData']>;
    textButton?: ReturnType<Button['getData']>;
    topLabel?: string;
  };

  constructor() {
    super();

    this._data = {};
  }

  setBottomLabel(bottomLabel: string) {
    this._data.bottomLabel = bottomLabel;

    return this;
  }

  setButton(button: Button) {
    if (button instanceof Button === false) {
      throw new Error('Invalid value passed for "setButton"');
    }

    this._data.textButton = button.getData();

    return this;
  }

  setContent(content: string) {
    this._data.content = content;

    return this;
  }

  setIconUrl(iconUrl: string) {
    this._data.iconUrl = iconUrl;

    return this;
  }

  setMultiline(multiline: boolean) {
    this._data.multiline = multiline;

    return this;
  }

  setOnClickAction(onClickAction: Action) {
    if (onClickAction instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    set(this._data, 'onClick.action', onClickAction.getData());

    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    // TODO: check the name of the property
    this._data.openLink = openLink.getData();

    return this;
  }

  setTopLabel(topLabel: string) {
    this._data.topLabel = topLabel;

    return this;
  }

  getData() {
    return { keyValue: super.getData() };
  }
}
