const Properties = require('./classes/Properties')

class PropertiesService {
  static getDocumentProperties () {
    return new Properties()
  }

  static getScriptProperties () {
    return new Properties()
  }

  static getUserProperties () {
    return new Properties()
  }
}

module.exports = PropertiesService
