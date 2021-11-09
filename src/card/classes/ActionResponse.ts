import BaseClass from '../../helpers/BaseClass';
import Navigation from './Navigation';
import Notification from './Notification';

export default class ActionResponse extends BaseClass {
  public _data: any;

  setNavigation(navigation) {
    if (navigation instanceof Navigation === false) {
      throw new Error('Invalid value passed for "setNavigation"');
    }
    Object.assign(this._data, navigation.getData());
  }

  setNotification(notification) {
    if (notification instanceof Notification === false) {
      throw new Error('Invalid value passed for "setNotification"');
    }
    this._data.notification = notification.getData();
  }
}
