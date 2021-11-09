import BaseClass from '../../helpers/BaseClass';

export default class Suggestions extends BaseClass {
  public _data: { autoComplete: { items: { text: string }[] } };

  constructor() {
    super();

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
