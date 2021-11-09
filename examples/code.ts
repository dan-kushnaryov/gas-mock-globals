/* eslint-disable no-undef */

import Logger from '../src/base/classes/Logger';
import Session from '../src/base/classes/Session';
import CardService from '../src/card/CardService';
import PropertiesService from '../src/properties/PropertiesService';
import Utilities from '../src/utilities/Utilities';

export function dummyFunction() {
  PropertiesService.getUserProperties().setProperty('DAYS_TO_FETCH', '5');
  Logger.log(`Current user's email ${Session.getActiveUser().getEmail()}`);
  Logger.log(`Encoded value ${Utilities.base64Encode('john doe')}`);
  return "i'm dummy";
}

export function doesUserSpeakEnglish() {
  const locale = Session.getActiveUserLocale();
  return locale === 'en';
}

export function getGmailCard() {
  const textParagraph = CardService.newTextParagraph().setText('Text paragraph');

  const cardSection = CardService.newCardSection()
    .setHeader('Section header')
    .addWidget(textParagraph);

  const header = CardService.newCardHeader().setTitle('Card title');

  const card = CardService.newCardBuilder()
    .setName('Card name')
    .setHeader(header)
    .addSection(cardSection)
    .build();

  return card;
}
