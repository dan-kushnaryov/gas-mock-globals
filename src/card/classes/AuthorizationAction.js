const BaseClass = require('../../helpers/BaseClass')

class AuthorizationAction extends BaseClass {
  setAuthorizationUrl (authorizationUrl) {
    this._data.url = authorizationUrl

    return this
  }
}

module.exports = AuthorizationAction
