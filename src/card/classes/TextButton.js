import set from 'lodash/set'
import Button from './Button'
import AuthorizationAction from './AuthorizationAction'

class TextButton extends Button {
  setText (text) {
    this._data.text = text

    return this
  }

  setAuthorizationAction (action) {
    if ((action instanceof AuthorizationAction) === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"')
    }

    set(this._data, 'onClick.openLink', action.getData())

    return this
  }

  getData () {
    return { textButton: super.getData() }
  }
}

export default TextButton
