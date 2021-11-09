import ActionResponse from './ActionResponse';

export default class ActionResponseBuilder {
  public _actionResponse: any;

  constructor() {
    this._actionResponse = new ActionResponse();
  }

  setNavigation(navigation) {
    this._actionResponse.setNavigation(navigation);
    return this;
  }

  setNotification(notification) {
    this._actionResponse.setNotification(notification);
    return this;
  }

  build() {
    return this._actionResponse;
  }
}
