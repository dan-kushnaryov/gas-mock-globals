const SpreadSheetAppStubConfiguration = require('./classes/SpreadSheetAppStubConfiguration')

class SpreadSheetApp {
  static getSpreadsheetTimeZone () {
    return SpreadSheetAppStubConfiguration.getTimeZone()
  }

  static getSpreadsheetLocale () {
    return SpreadSheetAppStubConfiguration.getLocale()
  }

  static setSpreadsheetTimeZone (timezone) {
    return SpreadSheetAppStubConfiguration.setTimeZone(timezone)
  }

  static setSpreadsheetLocale (locale) {
    return SpreadSheetAppStubConfiguration.setLocale(locale)
  }
}

module.exports = SpreadSheetApp
