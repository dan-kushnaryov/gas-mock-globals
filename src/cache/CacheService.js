const Cache = require('./classes/Cache')

class CacheService {
  static getDocumentationCache () {
    return new Cache()
  }

  static getScriptCache () {
    return new Cache()
  }

  static getUserCache () {
    return new Cache()
  }
}

module.exports = CacheService
