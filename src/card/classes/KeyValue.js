import set from 'lodash/set'

import Action from './Action'
import Widget from './Widget'
import Button from './Button'

class KeyValue extends Widget {
  setIconUrl (iconUrl) {
    this._data.iconUrl = iconUrl

    return this
  }

  setTopLabel (topLabel) {
    this._data.topLabel = topLabel

    return this
  }

  setBottomLabel (bottomLabel) {
    this._data.bottomLabel = bottomLabel

    return this
  }

  setContent (content) {
    this._data.content = content

    return this
  }

  setMultiline (multiline) {
    this._data.multiline = multiline

    return this
  }

  setOnClickAction (onClickAction) {
    if ((onClickAction instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"')
    }

    set(this._data, 'onClick.action', onClickAction.getData())

    return this
  }

  setOpenLink (openLink) {
    this._data.openLink = openLink

    return this
  }

  setButton (button) {
    if ((button instanceof Button) === false) {
      throw new Error('Invalid value passed for "setButton"')
    }

    this._data.textButton = button.getData()
    return this
  }

  getData () {
    return { keyValue: super.getData() }
  }
}

export default KeyValue
