const Card = require('./Card')

class CardBuilder {
  constructor () {
    this._card = new Card()
  }

  addCardAction (cardAction) {
    this._card.addCardAction(cardAction)

    return this
  }

  addSection (section) {
    this._card.addSection(section)

    return this
  }

  build () {
    return this._card
  }

  setHeader (header) {
    this._card.setHeader(header)

    return this
  }
}

module.exports = CardBuilder
