
class Cache {
  constructor () {
    this._data = {}
  }

  get (key) {
    return this._data[key] || null
  }

  getAll (keys = []) {
    if (!keys.length) return this._data

    return this._filterByKeys(key => keys.includes(key))
  }

  put (key, value) {
    this._data[key] = value
  }

  putAll (values = {}) {
    this._data = Object.assign(this._data, values)
  }

  remove (key) {
    delete this._data[key]
  }

  removeAll (keys = []) {
    this._data = this._filterByKeys(key => !keys.includes(key))
  }

  _filterByKeys (filerFn) {
    return Object.assign({}, ...Object.keys(this._data)
      .filter(filerFn)
      .map(k => ({ [k]: this._data[k] })))
  }
}

module.exports = Cache
