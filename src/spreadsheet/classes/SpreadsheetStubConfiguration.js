class SpreadsheetStubConfiguration {
  constructor () {
    this.init()
  }

  init () {
    this._timezone = 'America/New_York'

    this._locale = 'en_US'
  }

  getTimeZone () {
    return this._timezone
  }

  setTimeZone (timezone) {
    this._timezone = timezone
  }

  getLocale () {
    return this._locale
  }

  setLocale (locale) {
    this._locale = locale
  }

  reset () {
    this.init()
  }
}

module.exports = new SpreadsheetStubConfiguration()
