// classes
const CardHeader = require('./classes/CardHeader')
const CardBuilder = require('./classes/CardBuilder')
const CardSection = require('./classes/CardSection')
const Action = require('./classes/Action')
const AuthorizationAction = require('./classes/AuthorizationAction')
const KeyValue = require('./classes/KeyValue')
const TextButton = require('./classes/TextButton')
const ImageButton = require('./classes/ImageButton')
const OpenLink = require('./classes/OpenLink')
const ButtonSet = require('./classes/ButtonSet')
const CardAction = require('./classes/CardAction')
const TextParagraph = require('./classes/TextParagraph')
const TextInput = require('./classes/TextInput')
const SelectionInput = require('./classes/SelectionInput')
const Image = require('./classes/Image')
const UniversalActionResponseBuilder = require('./classes/UniversalActionResponseBuilder')

// enums
const ImageStyle = require('./enums/ImageStyle')
const Icon = require('./enums/Icon')
const OpenAs = require('./enums/OpenAs')
const SelectionInputType = require('./enums/SelectionInputType')

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

module.exports = CardService
