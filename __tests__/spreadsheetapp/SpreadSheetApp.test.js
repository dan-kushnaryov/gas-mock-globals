const SpreadSheetAppStubConfiguration = require('../../src/spreadsheetapp/classes/SpreadSheetAppStubConfiguration')
const SpreadSheetApp = require('../../src/spreadsheetapp/SpreadsheetApp')

describe('SpreadSheetApp', () => {
  it('Should have correct default Locale', () => {
    expect(SpreadSheetApp.getSpreadsheetLocale()).toBe('en_US')
  })

  it('Should have correct default TimeZone', () => {
    expect(SpreadSheetApp.getSpreadsheetTimeZone()).toBe('America/New_York')
  })

  const locale = 'en_US'
  const tz = 'America/Los_Angeles'

  it('Should set correct Locale & TimeZone', () => {
    SpreadSheetAppStubConfiguration.setLocale(locale)
    SpreadSheetAppStubConfiguration.setTimeZone(tz)

    expect(SpreadSheetApp.getSpreadsheetLocale()).toBe(locale)
    expect(SpreadSheetApp.getSpreadsheetTimeZone()).toBe(tz)
  })

  it('Should get correct Locale & TimeZone', () => {
    SpreadSheetApp.setSpreadsheetLocale(locale)
    SpreadSheetApp.setSpreadsheetTimeZone(tz)

    expect(SpreadSheetAppStubConfiguration.getLocale()).toBe(locale)
    expect(SpreadSheetAppStubConfiguration.getTimeZone()).toBe(tz)
  })

  beforeEach(() => {
    SpreadSheetAppStubConfiguration.reset()
  })
})
