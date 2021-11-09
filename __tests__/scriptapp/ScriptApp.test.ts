import ScriptAppStubConfiguration from '../../src/script/classes/ScriptAppStubConfiguration';
import ScriptApp from '../../src/script/ScriptApp';

describe('ScriptApp', () => {
  it('Should set correct Locale & TimeZone', () => {
    const token = 'custom_oauth_token';
    const scriptId = 'custom_script_id';

    ScriptAppStubConfiguration.setOAuthToken(token);
    ScriptAppStubConfiguration.setScriptId(scriptId);

    expect(ScriptApp.getOAuthToken()).toBe(token);
    expect(ScriptApp.getScriptId()).toBe(scriptId);
  });

  beforeEach(() => {
    ScriptAppStubConfiguration.reset();
  });
});
