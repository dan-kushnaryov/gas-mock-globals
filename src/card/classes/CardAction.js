import set from 'lodash/set'

import OpenLink from './OpenLink'
import BaseClass from '../../helpers/BaseClass'

class CardAction extends BaseClass {
  setText (text) {
    this._data.actionLabel = text

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

export default CardAction
