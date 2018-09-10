import Widget from './Widget'
import Button from './Button'

class ButtonSet extends Widget {
  constructor () {
    super()
    this._data.buttons = []
  }

  addButton (button) {
    if ((button instanceof Button) === false) {
      throw new Error('Invalid value passed for "addButton"')
    }

    this._data.buttons.push(button.getData())

    return this
  }
}

export default ButtonSet
