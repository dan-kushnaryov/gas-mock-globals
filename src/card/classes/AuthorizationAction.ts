export default class AuthorizationAction {
  public _data: {
    url?: string;
  };

  constructor() {
    this._data = {};
  }

  getData() {
    return this._data;
  }

  setAuthorizationUrl(authorizationUrl: string) {
    this._data.url = authorizationUrl;

    return this;
  }
}
