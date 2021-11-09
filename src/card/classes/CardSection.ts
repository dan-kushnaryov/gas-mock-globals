import Button from './Button';
import ButtonSet from './ButtonSet';
import Widget from './Widget';

export default class CardSection {
  public _data: {
    collapsible?: boolean;
    header?: string;
    uncollapsiblewidgetsNum?: number;
    widgets: ReturnType<ButtonSet['getData']>[];
  };

  constructor() {
    this._data = { widgets: [] };
  }

  getData() {
    return this._data;
  }

  addWidget(widget: Widget) {
    if (widget instanceof Widget === false) {
      throw new Error('Invalid value passed for "addWidget"');
    }

    if (widget instanceof Button) {
      const buttonSet = new ButtonSet().addButton(widget);

      this._data.widgets.push(buttonSet.getData());
    } else {
      this._data.widgets.push(widget.getData());
    }

    return this;
  }

  setCollapsible(collapsible: boolean) {
    this._data.collapsible = collapsible;

    return this;
  }

  setHeader(header: string) {
    this._data.header = header;

    return this;
  }

  setNumUncollapsibleWidgets(uncollapsiblewidgetsNum: number) {
    this._data.uncollapsiblewidgetsNum = uncollapsiblewidgetsNum;

    return this;
  }
}
