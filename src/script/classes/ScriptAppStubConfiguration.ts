export default class ScriptAppStubConfiguration {
  public _scriptId: any;

  public _oauthToken: any;

  constructor() {
    this.init();
  }

  init() {
    this._scriptId = '';

    this._oauthToken = '';
  }

  getScriptId() {
    return this._scriptId;
  }

  setScriptId(scriptId) {
    this._scriptId = scriptId;
  }

  getOAuthToken() {
    return this._oauthToken;
  }

  setOAuthToken(token) {
    this._oauthToken = token;
  }

  reset() {
    this.init();
  }
}

module.exports = new ScriptAppStubConfiguration();
