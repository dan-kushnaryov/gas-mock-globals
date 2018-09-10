class Properties {
  constructor () {
    this._data = {}
  }

  getProperty (key) {
    return this._data[key] || null
  }

  getProperties () {
    return this._data
  }

  getKeys () {
    return Object.keys(this._data)
  }

  setProperty (key, value) {
    this._data[key] = value

    return this
  }

  setProperties (properties = {}, deleteAllOthers = false) {
    this._data = Object
      .assign(deleteAllOthers ? {} : this._data, properties)

    return this
  }

  deleteProperty (key) {
    delete this._data[key]

    return this
  }

  deleteAllProperties () {
    this._data = {}

    return this
  }
}

export default Properties
