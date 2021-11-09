import BaseClass from '../../src/helpers/BaseClass';
import Service from './Service';

export default class OAuth2 extends BaseClass {
  static createService(serviceName: string) {
    return new Service(serviceName);
  }
}
