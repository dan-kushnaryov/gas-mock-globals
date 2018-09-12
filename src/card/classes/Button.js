const set = require('lodash.set')

const OpenLink = require('./OpenLink')
const Action = require('./Action')
const Widget = require('./Widget')

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

module.exports = Button
