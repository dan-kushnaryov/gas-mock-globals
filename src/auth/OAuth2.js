const BaseClass = require('../../src/helpers/BaseClass')
const Service = require('./Service')

class OAuth2 extends BaseClass {
  static createService (serviceName) {
    return new Service(serviceName)
  }
}

module.exports = OAuth2
