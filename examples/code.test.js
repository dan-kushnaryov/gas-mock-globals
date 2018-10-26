/* eslint-disable no-undef */
require('..') // load polyfills
const code = require('./code')

test('Function which uses Apps Script services under the hood', () => {
  expect(code.dummyFunction()).toBe('i\'m dummy')
})

test('Mocking global services methods', () => {
  Session.getActiveUserLocale = jest.fn().mockReturnValue('fr')

  const result = code.doesUserSpeakEnglish()

  expect(Session.getActiveUserLocale).toBeCalled()
  expect(result).toBeFalsy()
})

test('Gmail cards snapshot', () => {
  const card = code.getGmailCard()
  expect(card.printJson()).toMatchSnapshot()
})
