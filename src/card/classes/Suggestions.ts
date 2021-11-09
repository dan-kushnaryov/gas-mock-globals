import BaseClass from '../../helpers/BaseClass';

export default class Suggestions extends BaseClass {
  public _data: any;

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

  addSuggestions(suggestions = []) {
    suggestions.forEach((s) => this.addSuggestion(s));

    return this;
  }
}
