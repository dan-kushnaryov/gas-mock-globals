import ActionResponse from './ActionResponse';
import Navigation from './Navigation';
import Notification from './Notification';

export default class ActionResponseBuilder {
  public _actionResponse: any;

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

  build() {
    return this._actionResponse;
  }
}
