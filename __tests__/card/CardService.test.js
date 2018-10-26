const CardService = require('../../src/card/CardService')
const CardHeader = require('../../src/card/classes/CardHeader')
const CardBuilder = require('../../src/card/classes/CardBuilder')
const CardSection = require('../../src/card/classes/CardSection')
const KeyValue = require('../../src/card/classes/KeyValue')
const Action = require('../../src/card/classes/Action')
const AuthorizationAction = require('../../src/card/classes/AuthorizationAction')
const TextButton = require('../../src/card/classes/TextButton')
const ImageButton = require('../../src/card/classes/ImageButton')
const OpenLink = require('../../src/card/classes/OpenLink')
const ButtonSet = require('../../src/card/classes/ButtonSet')
const CardAction = require('../../src/card/classes/CardAction')
const TextParagraph = require('../../src/card/classes/TextParagraph')
const TextInput = require('../../src/card/classes/TextInput')
const SelectionInput = require('../../src/card/classes/SelectionInput')
const Image = require('../../src/card/classes/Image')
const UniversalActionResponseBuilder = require('../../src/card/classes/UniversalActionResponseBuilder')

describe('CardService', () => {
  it('it should return the new instance of classes.CardHeader', () => {
    expect(CardService.newCardHeader()).toBeInstanceOf(CardHeader)
  })

  it('it should return the new instance of classes.CardBuilder', () => {
    expect(CardService.newCardBuilder()).toBeInstanceOf(CardBuilder)
  })

  it('it should return the new instance of classes.CardSection', () => {
    expect(CardService.newCardSection()).toBeInstanceOf(CardSection)
  })

  it('it should return the new instance of classes.KeyValue', () => {
    expect(CardService.newKeyValue()).toBeInstanceOf(KeyValue)
  })

  it('it should return the new instance of classes.Action', () => {
    expect(CardService.newAction()).toBeInstanceOf(Action)
  })

  it('it should return the new instance of classes.AuthorizationAction', () => {
    expect(CardService.newAuthorizationAction()).toBeInstanceOf(AuthorizationAction)
  })

  it('it should return the new instance of classes.TextButton', () => {
    expect(CardService.newTextButton()).toBeInstanceOf(TextButton)
  })

  it('it should return the new instance of classes.ImageButton', () => {
    expect(CardService.newImageButton()).toBeInstanceOf(ImageButton)
  })

  it('it should return the new instance of classes.OpenLink', () => {
    expect(CardService.newOpenLink()).toBeInstanceOf(OpenLink)
  })

  it('it should return the new instance of classes.ButtonSet', () => {
    expect(CardService.newButtonSet()).toBeInstanceOf(ButtonSet)
  })

  it('it should return the new instance of classes.CardAction', () => {
    expect(CardService.newCardAction()).toBeInstanceOf(CardAction)
  })

  it('it should return the new instance of classes.TextParagraph', () => {
    expect(CardService.newTextParagraph()).toBeInstanceOf(TextParagraph)
  })

  it('it should return the new instance of classes.TextInput', () => {
    expect(CardService.newTextInput()).toBeInstanceOf(TextInput)
  })

  it('it should return the new instance of classes.SelectionInput', () => {
    expect(CardService.newSelectionInput()).toBeInstanceOf(SelectionInput)
  })

  it('it should return the new instance of classes.Image', () => {
    expect(CardService.newImage()).toBeInstanceOf(Image)
  })

  it('it should return the new instance of classes.UniversalActionResponseBuilder', () => {
    expect(CardService.newUniversalActionResponseBuilder())
      .toBeInstanceOf(UniversalActionResponseBuilder)
  })
})
