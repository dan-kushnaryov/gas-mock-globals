const BaseClass = require('../../helpers/BaseClass')
const Navigation = require('./Navigation')

class ActionResponse extends BaseClass {
  setNavigation (navigation) {
    if ((navigation instanceof Navigation) === false) {
      throw new Error('Invalid value passed for "setNavigation"')
    }

    this._data = navigation.getData()
  }
}

module.exports = ActionResponse
