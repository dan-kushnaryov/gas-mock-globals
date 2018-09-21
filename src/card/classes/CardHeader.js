const BaseClass = require('../../helpers/BaseClass')

class CardHeader extends BaseClass {
  setImageStyle (imageStyle) {
    this._data.imageStyle = imageStyle

    return this
  }

  setImageUrl (imageUrl) {
    this._data.imageUrl = imageUrl

    return this
  }

  setSubtitle (subTitle) {
    this._data.subTitle = subTitle

    return this
  }

  setTitle (title) {
    this._data.title = title

    return this
  }
}

module.exports = CardHeader
