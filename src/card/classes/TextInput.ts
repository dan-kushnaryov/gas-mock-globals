import Action from './Action';
import Suggestions from './Suggestions';
import Widget from './Widget';

export default class TextInput extends Widget {
  public _data: {
    text?: string;
    hint?: string;
    multiline?: boolean;
    action?: Action;
    suggestions?: Suggestions;
    suggestionsAction?: Action;
    title?: string;
    value?: string;
  } = {};

  constructor() {
    super();
  }

  setFieldName(fieldName: string) {
    this._data.text = fieldName;

    return this;
  }

  setHint(hint: string) {
    this._data.hint = hint;

    return this;
  }

  setMultiline(multiline: boolean) {
    this._data.multiline = multiline;

    return this;
  }

  setOnChangeAction(action: Action) {
    if (action instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnChangeAction"');
    }

    this._data.action = action;

    return this;
  }

  setSuggestions(suggestions: Suggestions) {
    if (suggestions instanceof Suggestions === false) {
      throw new Error('Invalid value passed for "setSuggestionsAction"');
    }

    this._data.suggestions = suggestions;

    return this;
  }

  setSuggestionsAction(suggestionsAction: Action) {
    if (suggestionsAction instanceof Action === false) {
      throw new Error('Invalid value passed for "setSuggestionsAction"');
    }

    this._data.suggestionsAction = suggestionsAction;

    return this;
  }

  setTitle(title: string) {
    this._data.title = title;

    return this;
  }

  setValue(value: string) {
    this._data.value = value;

    return this;
  }
}
