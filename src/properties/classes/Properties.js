let data = {}

class Properties {
  deleteAllProperties () {
    data = {}

    return this
  }

  deleteProperty (key) {
    delete data[key]

    return this
  }

  getKeys () {
    return Object.keys(data)
  }

  getProperties () {
    return data
  }

  getProperty (key) {
    return data[key] || null
  }

  setProperties (properties = {}, deleteAllOthers = false) {
    data = Object
      .assign(deleteAllOthers ? {} : data, properties)

    return this
  }

  setProperty (key, value) {
    data[key] = value

    return this
  }
}

module.exports = Properties
