import Navigation from './Navigation';
import Notification from './Notification';
import OpenLink from './OpenLink';

export default class ActionResponse {
  public _data: {
    navigation?: ReturnType<Navigation['getData']>;
    notification?: ReturnType<Notification['getData']>;
    openLink?: ReturnType<OpenLink['getData']>;
  };

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }

  setNavigation(navigation: Navigation) {
    if (navigation instanceof Navigation === false) {
      throw new Error('Invalid value passed for "setNavigation"');
    }
    this._data.navigation = navigation.getData();
  }

  setNotification(notification: Notification) {
    if (notification instanceof Notification === false) {
      throw new Error('Invalid value passed for "setNotification"');
    }
    this._data.notification = notification.getData();
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }
    this._data.openLink = openLink.getData();
    return this;
  }
}
