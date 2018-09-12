const CardHeader = require('./CardHeader')
const CardSection = require('./CardSection')
const CardAction = require('./CardAction')
const BaseClass = require('../../helpers/BaseClass')

class Card extends BaseClass {
  constructor () {
    super()
    this._data.sections = []
    this._data.cardActions = []
  }

  setHeader (header) {
    if ((header instanceof CardHeader) === false) {
      throw new Error('Invalid value passed for "setHeader"')
    }

    this._data.header = header.getData()
  }

  addSection (section) {
    if ((section instanceof CardSection) === false) {
      throw new Error('Invalid value passed for "addSection"')
    }

    this._data.sections.push(section.getData())
  }

  addCardAction (cardAction) {
    if ((cardAction instanceof CardAction) === false) {
      throw new Error('Invalid value passed for "addCardAction"')
    }

    this._data.cardActions.push(cardAction.getData())
  }

  printJson () {
    return this.getData()
  }
}

module.exports = Card
