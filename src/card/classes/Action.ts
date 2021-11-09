import BaseClass from '../../helpers/BaseClass';

export default class Action extends BaseClass {
  public _data: any;

  setFunctionName(functionName) {
    this._data.actionMethodName = functionName;

    return this;
  }

  setLoadIndicator(loadIndicator) {
    this._data.actionMethodName = loadIndicator;

    return this;
  }

  setParameters(parameters) {
    this._data.parameters = parameters;

    return this;
  }
}
