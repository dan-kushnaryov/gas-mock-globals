const Spreadsheet = require('../../src/spreadsheet/Spreadsheet')
const SpreadSheetApp = require('../../src/spreadsheetapp/SpreadsheetApp')

describe('SpreadSheetApp', () => {
  it('Should return Spreadsheet', () => {
    expect(SpreadSheetApp.getActiveSpreadsheet()).toBe(Spreadsheet)
  })
})
