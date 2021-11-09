export default class Utilities {
  static base64Encode(string: string) {
    return Buffer.from(string).toString('base64');
  }

  static formatDate(date: Date, tz: string, format: string) {
    return '01/02/03 04:05';
  }
}
