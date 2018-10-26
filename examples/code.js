/* eslint-disable no-undef */

function dummyFunction () {
  PropertiesService.getUserProperties().setProperty('DAYS_TO_FETCH', '5')
  Logger.log(`Current user's email ${Session.getActiveUser().getEmail()}`)
  Logger.log(`Encoded value ${Utilities.base64Encode('john doe')}`)
  return 'i\'m dummy'
}

function doesUserSpeakEnglish () {
  const locale = Session.getActiveUserLocale()
  return locale === 'en'
}

function getGmailCard () {
  const textParagraph = CardService.newTextParagraph()
    .setText('Text paragraph')

  const cardSection = CardService.newCardSection()
    .setHeader('Section header')
    .addWidget(textParagraph)

  const header = CardService.newCardHeader().setTitle('Card title')

  const card = CardService.newCardBuilder()
    .setName('Card name')
    .setHeader(header)
    .addSection(cardSection)
    .build()

  return card
}

module.exports = {
  dummyFunction,
  doesUserSpeakEnglish,
  getGmailCard,
}
