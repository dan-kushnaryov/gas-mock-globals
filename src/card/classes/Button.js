import set from 'lodash/set'

import OpenLink from './OpenLink'
import Action from './Action'
import Widget from './Widget'

class Button extends Widget {
  setOnClickAction (onClickAction) {
    if ((onClickAction instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"')
    }

    set(this._data, 'onClick.action', onClickAction.getData())

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

export default Button
