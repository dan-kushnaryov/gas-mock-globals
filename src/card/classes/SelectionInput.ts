import Widget from './Widget';

export default class SelectionInput extends Widget {
  public _data: any;

  constructor() {
    super();
    this._data.items = [];
  }

  addItem(text: string, value: string, selected: boolean) {
    this._data.items.push({ text, value, selected });

    return this;
  }

  setFieldName(fieldName: string) {
    this._data.text = fieldName;

    return this;
  }

  setTitle(title: string) {
    this._data.title = title;

    return this;
  }

  setType(type: SelectionInputType) {
    this._data.type = type;

    return this;
  }
}
