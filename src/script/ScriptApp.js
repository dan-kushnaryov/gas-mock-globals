const ScriptAppStubConfiguration = require('./classes/ScriptAppStubConfiguration')

class ScriptApp {
  static getScriptId () {
    return ScriptAppStubConfiguration.getScriptId()
  }

  static getOAuthToken () {
    return ScriptAppStubConfiguration.getOAuthToken()
  }
}

module.exports = ScriptApp
