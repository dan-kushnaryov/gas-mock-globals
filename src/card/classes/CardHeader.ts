import BaseClass from '../../helpers/BaseClass';
import ImageStyle from '../enums/ImageStyle';

export default class CardHeader extends BaseClass {
  public _data: any;

  setImageStyle(imageStyle: ImageStyle) {
    this._data.imageStyle = imageStyle;

    return this;
  }

  setImageUrl(imageUrl: string) {
    this._data.imageUrl = imageUrl;

    return this;
  }

  setSubtitle(subTitle: string) {
    this._data.subTitle = subTitle;

    return this;
  }

  setTitle(title: string) {
    this._data.title = title;

    return this;
  }
}
