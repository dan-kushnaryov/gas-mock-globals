import BaseClass from '../../src/helpers/BaseClass';
import Service from './Service';

export default class OAuth2 extends BaseClass {
  static createService(serviceName) {
    return new Service(serviceName);
  }
}
