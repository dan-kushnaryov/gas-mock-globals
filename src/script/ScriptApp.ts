import ScriptAppStubConfiguration from './classes/ScriptAppStubConfiguration';

export default class ScriptApp {
  static getScriptId() {
    return ScriptAppStubConfiguration.getScriptId();
  }

  static getOAuthToken() {
    return ScriptAppStubConfiguration.getOAuthToken();
  }
}
