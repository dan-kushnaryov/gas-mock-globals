import BaseClass from '../../helpers/BaseClass';

export default class AuthorizationAction extends BaseClass {
  public _data: any;

  setAuthorizationUrl(authorizationUrl: string) {
    this._data.url = authorizationUrl;

    return this;
  }
}
