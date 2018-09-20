const BaseClass = require('../../helpers/BaseClass')
const OpenLink = require('./OpenLink')

class UniversalActionResponseBuilder extends BaseClass {
  build () {
    return this.getData()
  }

  displayAddOnCards (cards = []) {
    this._data.cards = cards

    return this
  }

  setOpenLink (openLink) {
    if ((openLink instanceof OpenLink) === false) {
      throw new Error('Invalid value passed for "setOpenLink"')
    }

    this._data.openLink = openLink

    return this
  }
}

module.exports = UniversalActionResponseBuilder
