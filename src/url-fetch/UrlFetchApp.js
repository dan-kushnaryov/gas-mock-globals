const HttpResponse = require('./classes/HttpResponse')

class UrlFetchApp {
  fetch (url, params = {}) {
    return new HttpResponse()
  }

  fetchAll (...requests) {
    return [...Array(requests.length)].map(() => this.fetch())
  }

  getRequest (url, params = {}) {
    return {}
  }
}

module.exports = UrlFetchApp
