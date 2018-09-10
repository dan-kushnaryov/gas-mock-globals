import BaseClass from '../../helpers/BaseClass'

class AuthorizationAction extends BaseClass {
  setAuthorizationUrl (authorizationUrl) {
    this._data.url = authorizationUrl

    return this
  }
}

export default AuthorizationAction
