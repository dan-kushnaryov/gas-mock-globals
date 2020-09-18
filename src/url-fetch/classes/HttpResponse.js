const Blob = require('../../base/classes/Blob')

class HttpResponse { 
  constructor(){
    this.statusCode = 200
    this.context = ''
  }

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
    return this.context
  }

  setContentText(context){
    this.context = context
    return this
  }

  getResponseCode () {
    return this.statusCode
  }

  setResponseCode(statusCode){
    this.statusCode = statusCode
    return this
  }
}

module.exports = HttpResponse
