import BaseClass from '../../helpers/BaseClass';
import LoadIndicator from '../enums/LoadIndicator';

export default class Action extends BaseClass {
  public _data: any;

  setFunctionName(functionName: string) {
    this._data.actionMethodName = functionName;

    return this;
  }

  setLoadIndicator(loadIndicator: LoadIndicator) {
    this._data.actionMethodName = loadIndicator;

    return this;
  }

  setParameters(parameters: Record<string, string>) {
    this._data.parameters = parameters;

    return this;
  }
}
