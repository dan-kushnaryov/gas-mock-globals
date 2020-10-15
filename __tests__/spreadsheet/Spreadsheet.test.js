const SpreadsheetStubConfiguration = require('../../src/spreadsheet/classes/SpreadsheetStubConfiguration')
const Spreadsheet = require('../../src/spreadsheet/Spreadsheet')

describe('Spreadsheet', () => {
  it('Should have correct default Locale', () => {
    expect(Spreadsheet.getSpreadsheetLocale()).toBe('en_US')
  })

  it('Should have correct default TimeZone', () => {
    expect(Spreadsheet.getSpreadsheetTimeZone()).toBe('America/New_York')
  })

  const locale = 'en_US'
  const tz = 'America/Los_Angeles'

  it('Should set correct Locale & TimeZone', () => {
    SpreadsheetStubConfiguration.setLocale(locale)
    SpreadsheetStubConfiguration.setTimeZone(tz)

    expect(Spreadsheet.getSpreadsheetLocale()).toBe(locale)
    expect(Spreadsheet.getSpreadsheetTimeZone()).toBe(tz)
  })

  it('Should get correct Locale & TimeZone', () => {
    Spreadsheet.setSpreadsheetLocale(locale)
    Spreadsheet.setSpreadsheetTimeZone(tz)

    expect(SpreadsheetStubConfiguration.getLocale()).toBe(locale)
    expect(SpreadsheetStubConfiguration.getTimeZone()).toBe(tz)
  })

  beforeEach(() => {
    SpreadsheetStubConfiguration.reset()
  })
})
