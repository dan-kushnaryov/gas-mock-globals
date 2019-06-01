const set = require('lodash.set')
const Button = require('./Button')
const AuthorizationAction = require('./AuthorizationAction')

class TextButton extends Button {
  setAuthorizationAction (action) {
    if ((action instanceof AuthorizationAction) === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"')
    }

    set(this._data, 'onClick.openLink', action.getData())

    return this
  }

  setText (text) {
    this._data.text = text
    return this
  }

  setTextButtonStyle (style) {
    this._data.style = style
    return this
  }

  getData () {
    return { textButton: super.getData() }
  }
}

module.exports = TextButton
