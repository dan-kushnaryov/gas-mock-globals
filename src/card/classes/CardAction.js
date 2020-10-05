const set = require('lodash.set')
const OpenLink = require('./OpenLink')
const BaseClass = require('../../helpers/BaseClass')
const Action = require('./Action')

class CardAction extends BaseClass {
  setOpenLink (openLink) {
    if ((openLink instanceof OpenLink) === false) {
      throw new Error('Invalid value passed for "setOpenLink"')
    }

    set(this._data, 'onClick.openLink', openLink.getData())

    return this
  }

  setText (text) {
    this._data.actionLabel = text

    return this
  }

  setOnClickAction (action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"')
    }
  
    set(this._data, 'onClick.action', action.getData())
  
    return this
  }
}

module.exports = CardAction
