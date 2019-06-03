const BaseClass = require('../../helpers/BaseClass')
const Card = require('./Card')

class Navigation extends BaseClass {
  constructor () {
    super()
    this._data.cardNavigations = []
  }

  pushCard (card) {
    if ((card instanceof Card) === false) {
      throw new Error('Invalid value passed for "pushCard"')
    }
    this._data
      .cardNavigations
      .push({ pushCard: card.getData() })
    return this
  }

  updateCard (card) {
    if ((card instanceof Card) === false) {
      throw new Error('Invalid value passed for "updateCard"')
    }
    this._data
      .cardNavigations
      .push({ updateCard: card.getData() })
    return this
  }

  popCard () {
    this._data
      .cardNavigations
      .push({ popCard: null })
    return this
  }
}

module.exports = Navigation
