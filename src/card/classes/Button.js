const set = require('lodash.set')

const AuthorizationAction = require('./AuthorizationAction')
const OpenLink = require('./OpenLink')
const Action = require('./Action')
const Widget = require('./Widget')

class Button extends Widget {
  setAuthorizationAction (action) {
    if ((action instanceof AuthorizationAction) === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"')
    }

    set(this._data, 'onClick.action', action.getData())

    return this
  }

  setOnClickAction (action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"')
    }

    set(this._data, 'onClick.action', action.getData())

    return this
  }

  setOpenLink (openLink) {
    if ((openLink instanceof OpenLink) === false) {
      throw new Error('Invalid value passed for "setOpenLink"')
    }

    set(this._data, 'onClick.openLink', openLink.getData())

    return this
  }
}

module.exports = Button
