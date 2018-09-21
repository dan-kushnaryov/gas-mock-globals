const BaseClass = require('../../helpers/BaseClass')

class Suggestions extends BaseClass {
  constructor () {
    super()
    this._data = {
      autoComplete: {
        items: [],
      },
    }
  }

  addSuggestion (suggestion = '') {
    this._data.autoComplete.items.push({
      text: suggestion,
    })

    return this
  }

  addSuggestions (suggestions = []) {
    suggestions.forEach(s => this.addSuggestion(s))

    return this
  }
}

module.exports = Suggestions
