import Widget from './Widget'

class TextParagraph extends Widget {
  setText (text) {
    this._data.text = text

    return this
  }
}

export default TextParagraph
