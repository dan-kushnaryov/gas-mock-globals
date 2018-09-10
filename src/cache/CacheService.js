import Cache from './classes/Cache'

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

export default CacheService
