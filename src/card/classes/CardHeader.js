import BaseClass from '../../helpers/BaseClass'

class CardHeader extends BaseClass {
  setTitle (title) {
    this._data.title = title

    return this
  }

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
}

export default CardHeader
