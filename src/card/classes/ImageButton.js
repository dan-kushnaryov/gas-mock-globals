const set = require('lodash.set')
const Button = require('./Button')
const OpenLink = require('./OpenLink')

class ImageButton extends Button {
  setIconUrl (url) {
    this._data.url = url

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

module.exports = ImageButton
