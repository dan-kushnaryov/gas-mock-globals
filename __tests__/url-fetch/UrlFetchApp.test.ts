import UrlFetchApp from '../../src/url-fetch/UrlFetchApp';
import HttpResponse from '../../src/url-fetch/classes/HttpResponse';
import UrlFetchAppStubConfiguration from '../../src/url-fetch/classes/UrlFetchAppStubConfiguration';

describe('UrlFetchApp', () => {
  it('Should fetch the request', () => {
    UrlFetchAppStubConfiguration.when('www.google.com').return(new HttpResponse());

    expect(UrlFetchApp.fetch('www.google.com')).toBeInstanceOf(HttpResponse);
  });

  it('Should fetch multiple requests', () => {
    UrlFetchAppStubConfiguration.when('www.google.com').return(new HttpResponse());
    UrlFetchAppStubConfiguration.when('www.gmail.com').return(new HttpResponse());

    const responses = UrlFetchApp.fetchAll([
      { url: 'www.google.com', params: {} },
      { url: 'www.gmail.com', params: {} },
    ]);

    expect(responses).toHaveLength(2);
    expect(responses[0]).toBeInstanceOf(HttpResponse);
    expect(responses[1]).toBeInstanceOf(HttpResponse);
    expect(responses[0]).not.toBe(responses[1]);
  });

  it('Should get the request', () => {
    expect(UrlFetchApp.getRequest('request1')).toEqual({});
  });

  it('Should have valid status code & context', () => {
    UrlFetchAppStubConfiguration.when('www.google.com').return(new HttpResponse());
    UrlFetchAppStubConfiguration.when('www.gmail.com').return(
      new HttpResponse().setResponseCode(500)
    );
    UrlFetchAppStubConfiguration.when('www.bitbucket.com').return(
      new HttpResponse().setContentText('Custom Response')
    );

    expect(UrlFetchApp.fetch('www.google.com').getResponseCode()).toBe(200);
    expect(UrlFetchApp.fetch('www.gmail.com').getResponseCode()).toBe(500);

    expect(UrlFetchApp.fetch('www.google.com').getContentText()).toBe('');
    expect(UrlFetchApp.fetch('www.bitbucket.com').getContentText()).toBe('Custom Response');
  });

  beforeEach(() => {
    UrlFetchAppStubConfiguration.reset();
  });
});
