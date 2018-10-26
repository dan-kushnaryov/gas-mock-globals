const HttpResponse = require('./classes/HttpResponse')

class UrlFetchApp {
  static fetch (url, params = {}) {
    return new HttpResponse()
  }

  static fetchAll (...requests) {
    return [...Array(requests.length)].map(() => this.fetch())
  }

  static getRequest (url, params = {}) {
    return {}
  }
}

module.exports = UrlFetchApp
