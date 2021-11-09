import ActionResponse from './ActionResponse';
import Navigation from './Navigation';
import Notification from './Notification';
import OpenLink from './OpenLink';

export default class ActionResponseBuilder {
  public _data: {
    actionResponse: ActionResponse;
    openLink?: OpenLink;
  };

  constructor() {
    this._data = { actionResponse: new ActionResponse() };
  }

  setNavigation(navigation: Navigation) {
    this._data.actionResponse.setNavigation(navigation);
    return this;
  }

  setNotification(notification: Notification) {
    this._data.actionResponse.setNotification(notification);
    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }
    this._data.openLink = openLink;
  }

  build() {
    return this._data.actionResponse;
  }
}
