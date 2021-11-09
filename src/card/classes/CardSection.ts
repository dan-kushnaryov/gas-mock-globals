import BaseClass from '../../helpers/BaseClass';
import Button from './Button';
import ButtonSet from './ButtonSet';
import Widget from './Widget';

export default class CardSection extends BaseClass {
  public _data: any;

  constructor() {
    super();
    this._data.widgets = [];
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
