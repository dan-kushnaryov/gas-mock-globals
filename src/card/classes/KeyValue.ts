import set from 'lodash.set';
import Action from './Action';
import Button from './Button';
import OpenLink from './OpenLink';
import Widget from './Widget';

export default class KeyValue extends Widget {
  public _data: any;

  setBottomLabel(bottomLabel) {
    this._data.bottomLabel = bottomLabel;

    return this;
  }

  setButton(button) {
    if (button instanceof Button === false) {
      throw new Error('Invalid value passed for "setButton"');
    }

    this._data.textButton = button.getData();

    return this;
  }

  setContent(content) {
    this._data.content = content;

    return this;
  }

  setIconUrl(iconUrl) {
    this._data.iconUrl = iconUrl;

    return this;
  }

  setMultiline(multiline) {
    this._data.multiline = multiline;

    return this;
  }

  setOnClickAction(onClickAction) {
    if (onClickAction instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    set(this._data, 'onClick.action', onClickAction.getData());

    return this;
  }

  setOpenLink(openLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    // TODO: check the name of the property
    this._data.openLink = openLink.getData();

    return this;
  }

  setTopLabel(topLabel) {
    this._data.topLabel = topLabel;

    return this;
  }

  getData() {
    return { keyValue: super.getData() };
  }
}
