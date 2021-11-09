import ActionResponse from './ActionResponse';
import Navigation from './Navigation';
import Notification from './Notification';
import OpenLink from './OpenLink';

export default class ActionResponseBuilder {
  public _actionResponse: ActionResponse;

  constructor() {
    this._actionResponse = new ActionResponse();
  }

  setNavigation(navigation: Navigation) {
    this._actionResponse.setNavigation(navigation);
    return this;
  }

  setNotification(notification: Notification) {
    this._actionResponse.setNotification(notification);
    return this;
  }

  setOpenLink(openLink: OpenLink) {
    this._actionResponse.setOpenLink(openLink);
    return this;
  }

  build() {
    return this._actionResponse;
  }
}
