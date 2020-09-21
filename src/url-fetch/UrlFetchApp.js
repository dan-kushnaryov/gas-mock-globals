const HttpResponse = require('./classes/HttpResponse')
const UrlFetchAppStubConfiguration = require('./classes/UrlFetchAppStubConfiguration')

class UrlFetchApp {
  static fetch (url, params = {}) {
    const data = UrlFetchAppStubConfiguration.get(url)
    if (data) {
      return data.response
    }
    if (UrlFetchAppStubConfiguration.requests.length > 0) {
      // if UrlFetchAppStubConfiguration has stubs, means response not found
      return null
    }
    return new HttpResponse()
  }

  static fetchAll (...requests) {
    return requests.map(request => this.fetch(request.url, request.params))
  }

  static getRequest (url, params = {}) {
    return {}
  }
}

module.exports = UrlFetchApp
