export default class UrlFetchAppStubConfiguration {
  public requests: any;
  public currentUrl: any;

  constructor() {
    // requests array has all the URLs with their specific responses
    this.requests = [];

    // to find & correctly set the response to specific URL in 'return' method
    this.currentUrl = '';
  }

  when(url) {
    this.currentUrl = url;
    // const data = this.get(this.currentUrl)
    // if (!data) {
    this.requests.push({ url });
    // }
    return this;
  }

  return(response) {
    const data = this.get(this.currentUrl);
    data.response = response;
    this.currentUrl = '';
    return this;
  }

  get(url) {
    return this.requests.find((r) => r.url === url);
  }

  reset() {
    this.currentUrl = '';
    this.requests = [];
  }
}

module.exports = new UrlFetchAppStubConfiguration();
