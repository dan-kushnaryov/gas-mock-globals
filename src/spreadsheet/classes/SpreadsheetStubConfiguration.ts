export class SpreadsheetStubConfiguration {
  public _timezone?: string;

  public _locale?: string;

  constructor() {
    this.init();
  }

  init() {
    this._timezone = 'America/New_York';

    this._locale = 'en_US';
  }

  getTimeZone() {
    return this._timezone;
  }

  setTimeZone(timezone: string) {
    this._timezone = timezone;
  }

  getLocale() {
    return this._locale;
  }

  setLocale(locale: string) {
    this._locale = locale;
  }

  reset() {
    this.init();
  }
}

const spreadsheetStubConfiguration = new SpreadsheetStubConfiguration();

export default spreadsheetStubConfiguration;
