const Widget = require('./Widget')

class SelectionInput extends Widget {
  constructor () {
    super()
    this._data.items = []
  }

  addItem (text, value, selected) {
    this._data.items.push({ text, value, selected })

    return this
  }

  setFieldName (fieldName) {
    this._data.text = fieldName

    return this
  }

  setTitle (title) {
    this._data.title = title

    return this
  }

  setType (type) {
    this._data.type = type

    return this
  }
}

module.exports = SelectionInput
