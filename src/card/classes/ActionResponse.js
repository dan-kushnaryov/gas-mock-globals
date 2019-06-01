const BaseClass = require('../../helpers/BaseClass')
const Navigation = require('./Navigation')
const Notification = require('./Notification')

class ActionResponse extends BaseClass {

  setNavigation (navigation) {
    if ((navigation instanceof Navigation) === false) {
      throw new Error('Invalid value passed for "setNavigation"')
    }
    Object.assign(this._data, navigation.getData())
  }

  setNotification (notification) {
    if ((notification instanceof Notification) === false) {
      throw new Error('Invalid value passed for "setNotification"')
    }
    this._data.notification = notification.getData()
  }

}

module.exports = ActionResponse
