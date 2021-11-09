import Cache from './classes/Cache';

export default class CacheService {
  static getDocumentationCache() {
    return new Cache();
  }

  static getScriptCache() {
    return new Cache();
  }

  static getUserCache() {
    return new Cache();
  }
}
