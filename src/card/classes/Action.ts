import LoadIndicator from '../enums/LoadIndicator';

export default class Action {
  public _data: {
    actionMethodName?: string;
    parameters?: Record<string, string>;
    loadIndicator?: LoadIndicator;
  };

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }

  setFunctionName(functionName: string) {
    this._data.actionMethodName = functionName;

    return this;
  }

  setLoadIndicator(loadIndicator: LoadIndicator) {
    this._data.loadIndicator = loadIndicator;

    return this;
  }

  setParameters(parameters: Record<string, string>) {
    this._data.parameters = parameters;

    return this;
  }
}
