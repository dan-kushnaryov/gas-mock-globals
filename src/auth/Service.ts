import BaseClass from '../../src/helpers/BaseClass';
import Properties from '../properties/classes/Properties';

export default class Service extends BaseClass {
  public _data: {
    serviceName: string;
    params: Record<string, string>;
    scriptId: string;
    authorizationBaseUrl?: string;
    tokenUrl?: string;
    clientId?: string;
    clientSecret?: string;
    callbackFunctionName?: string;
    propertyStore?: Properties;
    cache?: Cache;
    lock?: any;
    privateKey?: string;
    issuer?: string;
    subject?: string;
    expirationMinutes?: number;
    grantType?: any;
  };

  constructor(serviceName: string) {
    super();

    this._data.serviceName = serviceName;
    this._data.params = {};
    this._data.scriptId = 'dummy-script-id';
  }

  setAuthorizationBaseUrl(authorizationBaseUrl: string) {
    this._data.authorizationBaseUrl = authorizationBaseUrl;

    return this;
  }

  setTokenUrl(tokenUrl: string) {
    this._data.tokenUrl = tokenUrl;

    return this;
  }

  setClientId(clientId: string) {
    this._data.clientId = clientId;

    return this;
  }

  setClientSecret(clientSecret: string) {
    this._data.clientSecret = clientSecret;

    return this;
  }

  setCallbackFunction(callbackFunctionName: string) {
    this._data.callbackFunctionName = callbackFunctionName;

    return this;
  }

  setPropertyStore(propertyStore: Properties) {
    this._data.propertyStore = propertyStore;

    return this;
  }

  setScope(scope: string, optSeparator: string) {
    const separator = optSeparator || ' ';

    this._data.params.scope = Array.isArray(scope) ? scope.join(separator) : scope;

    return this;
  }

  setParam(name: string, value: string) {
    this._data.params[name] = value;

    return this;
  }

  setCache(cache: Cache) {
    this._data.cache = cache;

    return this;
  }

  setLock(lock: any) {
    this._data.lock = lock;

    return this;
  }

  setPrivateKey(privateKey: string) {
    this._data.privateKey = privateKey;

    return this;
  }

  setIssuer(issuer: string) {
    this._data.issuer = issuer;

    return this;
  }

  setSubject(subject: string) {
    this._data.subject = subject;

    return this;
  }

  setExpirationMinutes(expirationMinutes: number) {
    this._data.expirationMinutes = expirationMinutes;

    return this;
  }

  setGrantType(grantType: any) {
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

  fetchToken(payload: any, optUrl: string) {
    return { token: 'dummy-token' };
  }

  getTokenFromResponse(response: any) {
    return 'dummy-response-token';
  }

  parseToken(content: any) {
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
