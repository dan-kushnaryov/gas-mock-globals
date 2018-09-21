const BaseClass = require('../../helpers/BaseClass')

class Action extends BaseClass {
  setFunctionName (functionName) {
    this._data.actionMethodName = functionName

    return this
  }

  setLoadIndicator (loadIndicator) {
    this._data.actionMethodName = loadIndicator

    return this
  }

  setParameters (parameters) {
    this._data.parameters = parameters

    return this
  }
}

module.exports = Action
