const Spreadsheet = require('../spreadsheet/Spreadsheet')

class SpreadSheetApp {
  static getActiveSpreadsheet () {
    return Spreadsheet
  }
}

module.exports = SpreadSheetApp
