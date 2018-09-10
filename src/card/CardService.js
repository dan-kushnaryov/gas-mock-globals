// classes
import CardHeader from './classes/CardHeader'
import CardBuilder from './classes/CardBuilder'
import CardSection from './classes/CardSection'
import Action from './classes/Action'
import AuthorizationAction from './classes/AuthorizationAction'
import KeyValue from './classes/KeyValue'
import TextButton from './classes/TextButton'
import ImageButton from './classes/ImageButton'
import OpenLink from './classes/OpenLink'
import ButtonSet from './classes/ButtonSet'
import CardAction from './classes/CardAction'
import TextParagraph from './classes/TextParagraph'
import TextInput from './classes/TextInput'
import SelectionInput from './classes/SelectionInput'
import Image from './classes/Image'
import UniversalActionResponseBuilder from './classes/UniversalActionResponseBuilder'

// enums
import ImageStyle from './enums/ImageStyle'
import Icon from './enums/Icon'
import OpenAs from './enums/OpenAs'
import SelectionInputType from './enums/SelectionInputType'

class CardService {
  static newCardHeader () {
    return new CardHeader()
  }

  static newCardBuilder () {
    return new CardBuilder()
  }

  static newCardSection () {
    return new CardSection()
  }

  static newKeyValue () {
    return new KeyValue()
  }

  static newAction () {
    return new Action()
  }

  static newAuthorizationAction () {
    return new AuthorizationAction()
  }

  static newTextButton () {
    return new TextButton()
  }

  static newImageButton () {
    return new ImageButton()
  }

  static newTextParagraph () {
    return new TextParagraph()
  }

  static newTextInput () {
    return new TextInput()
  }

  static newSelectionInput () {
    return new SelectionInput()
  }

  static newImage () {
    return new Image()
  }

  static newOpenLink () {
    return new OpenLink()
  }

  static newButtonSet () {
    return new ButtonSet()
  }

  static newCardAction () {
    return new CardAction()
  }

  static newUniversalActionResponseBuilder () {
    return new UniversalActionResponseBuilder()
  }

  static get ImageStyle () {
    return ImageStyle
  }

  static get Icon () {
    return Icon
  }

  static get OpenAs () {
    return OpenAs
  }

  static get SelectionInputType () {
    return SelectionInputType
  }
}

export default CardService
