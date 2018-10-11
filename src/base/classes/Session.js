const User = require('./User')

class Session {
  static getActiveUser () {
    return new User()
  }

  static getActiveUserLocale () {
    return 'en'
  }

  static getEffectiveUser () {
    return new User()
  }

  static getScriptTimeZone () {
    return 'GMT-11:00'
  }

  static getTemporaryActiveUserKey () {
    return '5e93753f-994c-4cb7-8ec1-9dc14877da69'
  }
}

module.exports = Session
