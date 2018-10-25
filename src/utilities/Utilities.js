class Utilities {
  static base64Encode (string) {
    return global.atob(string)
  }
}

module.exports = Utilities
