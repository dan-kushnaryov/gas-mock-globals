import BaseClass from '../../helpers/BaseClass'

class UniversalActionResponseBuilder extends BaseClass {
  displayAddOnCards (cards = []) {
    this._data.cards = cards

    return this
  }

  build () {
    return this.getData()
  }
}

export default UniversalActionResponseBuilder
