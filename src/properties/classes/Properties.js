class Properties {
  constructor () {
    this._data = {}
  }

  deleteAllProperties () {
    this._data = {}

    return this
  }

  deleteProperty (key) {
    delete this._data[key]

    return this
  }

  getKeys () {
    return Object.keys(this._data)
  }

  getProperties () {
    return this._data
  }

  getProperty (key) {
    return this._data[key] || null
  }

  setProperties (properties = {}, deleteAllOthers = false) {
    this._data = Object
      .assign(deleteAllOthers ? {} : this._data, properties)

    return this
  }

  setProperty (key, value) {
    this._data[key] = value

    return this
  }
}

module.exports = Properties
