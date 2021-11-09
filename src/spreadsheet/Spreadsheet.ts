import SpreadsheetStubConfiguration from './classes/SpreadsheetStubConfiguration';

export default class Spreadsheet {
  static getSpreadsheetTimeZone() {
    return SpreadsheetStubConfiguration.getTimeZone();
  }

  static getSpreadsheetLocale() {
    return SpreadsheetStubConfiguration.getLocale();
  }

  static setSpreadsheetTimeZone(timezone: string) {
    return SpreadsheetStubConfiguration.setTimeZone(timezone);
  }

  static setSpreadsheetLocale(locale: string) {
    return SpreadsheetStubConfiguration.setLocale(locale);
  }
}
