const BaseClass = require('../../helpers/BaseClass')

class Notification extends BaseClass {
  setText (text) {
    this._data.text = text
    return this
  }
}

module.exports = Notification
