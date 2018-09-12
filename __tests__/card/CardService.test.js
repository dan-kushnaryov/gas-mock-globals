const {
  CardService,
  CardHeader,
  CardBuilder,
  CardSection,
  KeyValue,
  Action,
  AuthorizationAction,
  TextButton,
  ImageButton,
  OpenLink,
  ButtonSet,
  CardAction,
  TextParagraph,
  TextInput,
  SelectionInput,
  Image,
  UniversalActionResponseBuilder
} = require('../../src')

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
