import Blob from '../../base/classes/Blob';

export default class HttpResponse {
  public statusCode: any;

  public context: any;

  constructor() {
    this.statusCode = 200;
    this.context = '';
  }

  getAllHeaders() {
    return this.getHeaders();
  }

  getHeaders() {
    return {
      'Content-Type': 'application/vnd.here.layerObjectList+json; charset=utf-8',
      Accept: 'application/json; charset=UTF-8',
      GroupId: 'FGx1AWaAzKOo0imNkLmf',
      AuthServiceId: 'here_app',
    };
  }

  getAs(contentType: string) {
    return new Blob();
  }

  getBlob() {
    return new Blob();
  }

  getContentText() {
    return this.context;
  }

  setContentText(context: string) {
    this.context = context;
    return this;
  }

  getResponseCode() {
    return this.statusCode;
  }

  setResponseCode(statusCode: string) {
    this.statusCode = statusCode;
    return this;
  }
}
