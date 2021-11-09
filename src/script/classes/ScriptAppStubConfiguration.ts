export class ScriptAppStubConfiguration {
  public _scriptId?: string;

  public _oauthToken?: string;

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

  setScriptId(scriptId: string) {
    this._scriptId = scriptId;
  }

  getOAuthToken() {
    return this._oauthToken;
  }

  setOAuthToken(token: string) {
    this._oauthToken = token;
  }

  reset() {
    this.init();
  }
}

const scriptAppStubConfiguration = new ScriptAppStubConfiguration();
export default scriptAppStubConfiguration;
