const SpreadsheetStubConfiguration = require('./classes/SpreadsheetStubConfiguration')

class Spreadsheet {
  static getSpreadsheetTimeZone () {
    return SpreadsheetStubConfiguration.getTimeZone()
  }

  static getSpreadsheetLocale () {
    return SpreadsheetStubConfiguration.getLocale()
  }

  static setSpreadsheetTimeZone (timezone) {
    return SpreadsheetStubConfiguration.setTimeZone(timezone)
  }

  static setSpreadsheetLocale (locale) {
    return SpreadsheetStubConfiguration.setLocale(locale)
  }
}

module.exports = Spreadsheet
