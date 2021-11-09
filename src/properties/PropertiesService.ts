import Properties from './classes/Properties';

export default class PropertiesService {
  static getDocumentProperties() {
    return new Properties();
  }

  static getScriptProperties() {
    return new Properties();
  }

  static getUserProperties() {
    return new Properties();
  }
}
