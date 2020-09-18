const UrlFetchAppStubConfiguration = require('./classes/UrlFetchAppStubConfiguration')

class UrlFetchApp {
  static fetch (url, params = {}) {
    const data = UrlFetchAppStubConfiguration.get(url)
    if(data)
      return data.response
    return null
  }

  static fetchAll (...requests) {
    return requests.map(request => this.fetch(request.url, request.params))
  }

  static getRequest (url, params = {}) {
    return {}
  }
}

module.exports = UrlFetchApp
