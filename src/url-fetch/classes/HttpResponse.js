const Blob = require('../../base/classes/Blob')

class HttpResponse {
  getAllHeaders () {
    return this.getHeaders()
  }

  getHeaders () {
    return {
      'Content-Type': 'application/vnd.here.layerObjectList+json; charset=utf-8',
      Accept: 'application/json; charset=UTF-8',
      GroupId: 'FGx1AWaAzKOo0imNkLmf',
      AuthServiceId: 'here_app',
    }
  }

  getAs (contentType) {
    return new Blob()
  }

  getBlob () {
    return new Blob()
  }

  getContentText () {
    return 'dummy-content-text'
  }

  getResponseCode () {
    return 200
  }
}

module.exports = HttpResponse
