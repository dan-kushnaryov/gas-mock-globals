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

  getData() {
    return {
      actionResponse: this._data.actionResponse.getData(),
      openLink: this._data.openLink?.getData(),
    };
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
    this._data.openLink = openLink;
    return this;
  }

  build() {
    return this.getData();
  }
}
