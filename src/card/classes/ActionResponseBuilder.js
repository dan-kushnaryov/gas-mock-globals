const ActionResponse = require('./ActionResponse')

class ActionResponseBuilder {
  constructor () {
    this._actionResponse = new ActionResponse()
  }

  setNavigation (navigation) {
    this._actionResponse.setNavigation(navigation)
    return this
  }

  setNotification (notification) {
    this._actionResponse.setNotification(notification)
    return this
  }

  build () {
    return this._actionResponse
  }
}

module.exports = ActionResponseBuilder
