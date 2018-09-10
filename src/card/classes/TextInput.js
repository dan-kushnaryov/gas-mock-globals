import Widget from './Widget'
import Action from './Action'

class TextInput extends Widget {
  setFieldName (fieldName) {
    this._data.text = fieldName

    return this
  }

  setMultiline (multiline) {
    this._data.multiline = multiline

    return this
  }

  setTitle (title) {
    this._data.title = title

    return this
  }

  setHint (hint) {
    this._data.hint = hint

    return this
  }

  setValue (value) {
    this._data.value = value

    return this
  }

  setSuggestionsAction (suggestionsAction) {
    if ((suggestionsAction instanceof Action) === false) {
      throw new Error('Invalid value passed for "setSuggestionsAction"')
    }

    this._data.suggestionsAction = suggestionsAction

    return this
  }
}

export default TextInput
