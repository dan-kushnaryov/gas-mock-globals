import BaseClass from '../../helpers/BaseClass';

export default class CardHeader extends BaseClass {
  public _data: any;

  setImageStyle(imageStyle) {
    this._data.imageStyle = imageStyle;

    return this;
  }

  setImageUrl(imageUrl) {
    this._data.imageUrl = imageUrl;

    return this;
  }

  setSubtitle(subTitle) {
    this._data.subTitle = subTitle;

    return this;
  }

  setTitle(title) {
    this._data.title = title;

    return this;
  }
}
