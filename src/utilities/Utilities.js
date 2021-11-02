class Utilities {
  static base64Encode (string) {
    return Buffer.from(string).toString('base64')
  }

  static formatDate (date, tz, format) {
    return '01/02/03 04:05'
  }
}

module.exports = Utilities
