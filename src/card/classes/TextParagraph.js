const Widget = require('./Widget')

class TextParagraph extends Widget {
  setText (text) {
    this._data.text = text

    return this
  }
}

module.exports = TextParagraph
