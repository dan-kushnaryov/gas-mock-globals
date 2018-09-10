import Widget from './Widget'

class Image extends Widget {
  setImageUrl (url) {
    this._data.url = url

    return this
  }
}

export default Image
