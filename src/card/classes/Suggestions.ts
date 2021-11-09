export default class Suggestions {
  public _data: { autoComplete: { items: { text: string }[] } };

  constructor() {
    this._data = {
      autoComplete: {
        items: [],
      },
    };
  }

  addSuggestion(suggestion = '') {
    this._data.autoComplete.items.push({
      text: suggestion,
    });

    return this;
  }

  addSuggestions(suggestions: string[] = []) {
    suggestions.forEach((s) => this.addSuggestion(s));

    return this;
  }
}
