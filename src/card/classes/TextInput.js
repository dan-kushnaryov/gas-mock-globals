const Widget = require('./Widget')
const Action = require('./Action')
const Suggestions = require('./Suggestions')

class TextInput extends Widget {
  setFieldName (fieldName) {
    this._data.text = fieldName

    return this
  }

  setHint (hint) {
    this._data.hint = hint

    return this
  }

  setMultiline (multiline) {
    this._data.multiline = multiline

    return this
  }

  setOnChangeAction (action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnChangeAction"')
    }

    this._data.action = action

    return this
  }

  setSuggestions (suggestions) {
    if ((suggestions instanceof Suggestions) === false) {
      throw new Error('Invalid value passed for "setSuggestionsAction"')
    }

    this._data.suggestions = suggestions

    return this
  }

  setSuggestionsAction (suggestionsAction) {
    if ((suggestionsAction instanceof Action) === false) {
      throw new Error('Invalid value passed for "setSuggestionsAction"')
    }

    this._data.suggestionsAction = suggestionsAction

    return this
  }

  setTitle (title) {
    this._data.title = title

    return this
  }

  setValue (value) {
    this._data.value = value

    return this
  }
}

module.exports = TextInput
