import CardService from '../../src/card/CardService';
import Action from '../../src/card/classes/Action';
import AuthorizationAction from '../../src/card/classes/AuthorizationAction';
import ButtonSet from '../../src/card/classes/ButtonSet';
import CardAction from '../../src/card/classes/CardAction';
import CardBuilder from '../../src/card/classes/CardBuilder';
import CardHeader from '../../src/card/classes/CardHeader';
import CardSection from '../../src/card/classes/CardSection';
import Image from '../../src/card/classes/Image';
import ImageButton from '../../src/card/classes/ImageButton';
import KeyValue from '../../src/card/classes/KeyValue';
import OpenLink from '../../src/card/classes/OpenLink';
import SelectionInput from '../../src/card/classes/SelectionInput';
import TextButton from '../../src/card/classes/TextButton';
import TextInput from '../../src/card/classes/TextInput';
import TextParagraph from '../../src/card/classes/TextParagraph';
import UniversalActionResponseBuilder from '../../src/card/classes/UniversalActionResponseBuilder';

describe('CardService', () => {
  it('it should return the new instance of classes.CardHeader', () => {
    expect(CardService.newCardHeader()).toBeInstanceOf(CardHeader);
  });

  it('it should return the new instance of classes.CardBuilder', () => {
    expect(CardService.newCardBuilder()).toBeInstanceOf(CardBuilder);
  });

  it('it should return the new instance of classes.CardSection', () => {
    expect(CardService.newCardSection()).toBeInstanceOf(CardSection);
  });

  it('it should return the new instance of classes.KeyValue', () => {
    expect(CardService.newKeyValue()).toBeInstanceOf(KeyValue);
  });

  it('it should return the new instance of classes.Action', () => {
    expect(CardService.newAction()).toBeInstanceOf(Action);
  });

  it('it should return the new instance of classes.AuthorizationAction', () => {
    expect(CardService.newAuthorizationAction()).toBeInstanceOf(AuthorizationAction);
  });

  it('it should return the new instance of classes.TextButton', () => {
    expect(CardService.newTextButton()).toBeInstanceOf(TextButton);
  });

  it('it should return the new instance of classes.ImageButton', () => {
    expect(CardService.newImageButton()).toBeInstanceOf(ImageButton);
  });

  it('it should return the new instance of classes.OpenLink', () => {
    expect(CardService.newOpenLink()).toBeInstanceOf(OpenLink);
  });

  it('it should return the new instance of classes.ButtonSet', () => {
    expect(CardService.newButtonSet()).toBeInstanceOf(ButtonSet);
  });

  it('it should return the new instance of classes.CardAction', () => {
    expect(CardService.newCardAction()).toBeInstanceOf(CardAction);
  });

  it('it should return the new instance of classes.TextParagraph', () => {
    expect(CardService.newTextParagraph()).toBeInstanceOf(TextParagraph);
  });

  it('it should return the new instance of classes.TextInput', () => {
    expect(CardService.newTextInput()).toBeInstanceOf(TextInput);
  });

  it('it should return the new instance of classes.SelectionInput', () => {
    expect(CardService.newSelectionInput()).toBeInstanceOf(SelectionInput);
  });

  it('it should return the new instance of classes.Image', () => {
    expect(CardService.newImage()).toBeInstanceOf(Image);
  });

  it('it should return the new instance of classes.UniversalActionResponseBuilder', () => {
    expect(CardService.newUniversalActionResponseBuilder()).toBeInstanceOf(
      UniversalActionResponseBuilder
    );
  });
});
