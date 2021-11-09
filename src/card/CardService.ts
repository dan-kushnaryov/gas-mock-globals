// classes
import Action from './classes/Action';
import ActionResponseBuilder from './classes/ActionResponseBuilder';
import AuthorizationAction from './classes/AuthorizationAction';
import ButtonSet from './classes/ButtonSet';
import CardAction from './classes/CardAction';
import CardBuilder from './classes/CardBuilder';
import CardHeader from './classes/CardHeader';
import CardSection from './classes/CardSection';
import Image from './classes/Image';
import ImageButton from './classes/ImageButton';
import KeyValue from './classes/KeyValue';
import Navigation from './classes/Navigation';
import Notification from './classes/Notification';
import OpenLink from './classes/OpenLink';
import SelectionInput from './classes/SelectionInput';
import Suggestions from './classes/Suggestions';
import TextButton from './classes/TextButton';
import TextInput from './classes/TextInput';
import TextParagraph from './classes/TextParagraph';
import UniversalActionResponseBuilder from './classes/UniversalActionResponseBuilder';
// enums
// enums
import ComposeEmailType from './enums/ComposedEmailType';
import Icon from './enums/Icon';
import ImageStyle from './enums/ImageStyle';
import LoadIndicator from './enums/LoadIndicator';
import NotificationType from './enums/NotificationType';
import OnClose from './enums/OnClose';
import OpenAs from './enums/OpenAs';
import SelectionInputType from './enums/SelectionInputType';
import TextButtonStyle from './enums/TextButtonStyle';

export default class CardService {
  static newAction() {
    return new Action();
  }

  static newActionResponseBuilder() {
    return new ActionResponseBuilder();
  }

  static newAuthorizationAction() {
    return new AuthorizationAction();
  }

  static newButtonSet() {
    return new ButtonSet();
  }

  static newCardAction() {
    return new CardAction();
  }

  static newCardBuilder() {
    return new CardBuilder();
  }

  static newCardHeader() {
    return new CardHeader();
  }

  static newCardSection() {
    return new CardSection();
  }

  static newImage() {
    return new Image();
  }

  static newImageButton() {
    return new ImageButton();
  }

  static newKeyValue() {
    return new KeyValue();
  }

  static newNavigation() {
    return new Navigation();
  }

  static newNotification() {
    return new Notification();
  }

  static newOpenLink() {
    return new OpenLink();
  }

  static newSelectionInput() {
    return new SelectionInput();
  }

  static newSuggestions() {
    return new Suggestions();
  }

  static newTextButton() {
    return new TextButton();
  }

  static newTextInput() {
    return new TextInput();
  }

  static newTextParagraph() {
    return new TextParagraph();
  }

  static newUniversalActionResponseBuilder() {
    return new UniversalActionResponseBuilder();
  }

  static get ComposeEmailType() {
    return ComposeEmailType;
  }

  static get Icon() {
    return Icon;
  }

  static get ImageStyle() {
    return ImageStyle;
  }

  static get LoadIndicator() {
    return LoadIndicator;
  }

  static get NotificationType() {
    return NotificationType;
  }

  static get OnClose() {
    return OnClose;
  }

  static get OpenAs() {
    return OpenAs;
  }

  static get SelectionInputType() {
    return SelectionInputType;
  }

  static get TextButtonStyle() {
    return TextButtonStyle;
  }
}
