import Card from './Card'

class CardBuilder {
  constructor () {
    this._card = new Card()
  }

  setHeader (header) {
    this._card.setHeader(header)

    return this
  }

  addSection (section) {
    this._card.addSection(section)

    return this
  }

  addCardAction (cardAction) {
    this._card.addCardAction(cardAction)

    return this
  }

  build () {
    return this._card
  }
}

export default CardBuilder
