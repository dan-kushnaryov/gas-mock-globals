const BaseClass = require('../../helpers/BaseClass')
const Widget = require('./Widget')
const Button = require('./Button')
const ButtonSet = require('./ButtonSet')

class CardSection extends BaseClass {
  constructor () {
    super()
    this._data.widgets = []
  }

  addWidget (widget) {
    if ((widget instanceof Widget) === false) {
      throw new Error('Invalid value passed for "addWidget"')
    }

    if (widget instanceof Button) {
      const buttonSet = new ButtonSet().addButton(widget)

      this._data.widgets.push(buttonSet.getData())
    } else {
      this._data.widgets.push(widget.getData())
    }

    return this
  }

  setCollapsible (collapsible) {
    this._data.collapsible = collapsible

    return this
  }

  setHeader (header) {
    this._data.header = header

    return this
  }

  setNumUncollapsibleWidgets (uncollapsiblewidgetsNum) {
    this._data.uncollapsiblewidgetsNum = uncollapsiblewidgetsNum

    return this
  }
}

module.exports = CardSection
