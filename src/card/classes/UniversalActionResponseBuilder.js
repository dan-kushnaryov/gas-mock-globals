const BaseClass = require('../../helpers/BaseClass')

class UniversalActionResponseBuilder extends BaseClass {
  displayAddOnCards (cards = []) {
    this._data.cards = cards

    return this
  }

  build () {
    return this.getData()
  }
}

module.exports = UniversalActionResponseBuilder
