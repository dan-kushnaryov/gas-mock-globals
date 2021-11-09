import BaseClass from '../../src/helpers/BaseClass';

export default class Service extends BaseClass {
  public _data: any;

  constructor(serviceName) {
    super();

    this._data.serviceName = serviceName;
    this._data.params = {};
    this._data.scriptId = 'dummy-script-id';
  }

  setAuthorizationBaseUrl(authorizationBaseUrl) {
    this._data.authorizationBaseUrl = authorizationBaseUrl;

    return this;
  }

  setTokenUrl(tokenUrl) {
    this._data.tokenUrl = tokenUrl;

    return this;
  }

  setClientId(clientId) {
    this._data.clientId = clientId;

    return this;
  }

  setClientSecret(clientSecret) {
    this._data.clientSecret = clientSecret;

    return this;
  }

  setCallbackFunction(callbackFunctionName) {
    this._data.callbackFunctionName = callbackFunctionName;

    return this;
  }

  setPropertyStore(propertyStore) {
    this._data.propertyStore = propertyStore;

    return this;
  }

  setScope(scope, optSeparator) {
    const separator = optSeparator || ' ';

    this._data.params.scope = Array.isArray(scope) ? scope.join(separator) : scope;

    return this;
  }

  setParam(name, value) {
    this._data.params[name] = value;

    return this;
  }

  setCache(cache) {
    this._data.cache = cache;

    return this;
  }

  setLock(lock) {
    this._data.lock = lock;

    return this;
  }

  setPrivateKey(privateKey) {
    this._data.privateKey = privateKey;

    return this;
  }

  setIssuer(issuer) {
    this._data.issuer = issuer;

    return this;
  }

  setSubject(subject) {
    this._data.subject = subject;

    return this;
  }

  setExpirationMinutes(expirationMinutes) {
    this._data.expirationMinutes = expirationMinutes;

    return this;
  }

  setGrantType(grantType) {
    this._data.grantType = grantType;

    return this;
  }

  getAuthorizationUrl() {
    return `${this._data.authorizationBaseUrl}/dummy-route`;
  }

  handleCallback() {
    return true;
  }

  hasAccess() {
    return true;
  }

  getAccessToken() {
    return 'dummy-token';
  }

  reset() {}

  getLastError() {
    return new Error('dummy-error');
  }

  getRedirectUri() {
    return `https://dummy-redirect-url.com/${this._data.scriptId}`;
  }

  fetchToken(payload, optUrl) {
    return { token: 'dummy-token' };
  }

  getTokenFromResponse(response) {
    return 'dummy-response-token';
  }

  parseToken(content) {
    return 'dummy-parse-token';
  }

  refresh() {}

  getStorage() {
    return 'dummy-storage';
  }

  saveToken() {}

  getToken() {
    return 'dummy-token';
  }

  isExpired() {
    return false;
  }

  canRefresh() {
    return false;
  }

  exchangeJwt() {}

  createJwt() {
    return 'dummy-jwt';
  }

  lockable() {
    return 'dummy-lockable';
  }

  exchangeGrant() {}
}
