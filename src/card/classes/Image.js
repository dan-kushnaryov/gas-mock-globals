const Widget = require('./Widget')

class Image extends Widget {
  setImageUrl (url) {
    this._data.url = url

    return this
  }
}

module.exports = Image
