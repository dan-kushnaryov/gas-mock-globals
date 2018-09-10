import Widget from './Widget'

class SelectionInput extends Widget {
  constructor () {
    super()
    this._data.items = []
  }

  setFieldName (fieldName) {
    this._data.text = fieldName

    return this
  }

  setType (type) {
    this._data.type = type

    return this
  }

  setTitle (title) {
    this._data.title = title

    return this
  }

  addItem (text, value, selected) {
    this._data.items.push({ text, value, selected })

    return this
  }
}

export default SelectionInput
