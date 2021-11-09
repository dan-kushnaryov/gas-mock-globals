import Spreadsheet from '../../src/spreadsheet/Spreadsheet';
import SpreadSheetApp from '../../src/spreadsheetapp/SpreadsheetApp';

describe('SpreadSheetApp', () => {
  it('Should return Spreadsheet', () => {
    expect(SpreadSheetApp.getActiveSpreadsheet()).toBe(Spreadsheet);
  });
});
