/* eslint-disable no-undef */
import { dummyFunction, getGmailCard, doesUserSpeakEnglish } from './code';
import '../src';

test('Function which uses Apps Script services under the hood', () => {
  expect(dummyFunction()).toBe("i'm dummy");
});

test('Mocking global services methods', () => {
  Session.getActiveUserLocale = jest.fn().mockReturnValue('fr');

  const result = doesUserSpeakEnglish();

  expect(Session.getActiveUserLocale).toBeCalled();
  expect(result).toBeFalsy();
});

test('Gmail cards snapshot', () => {
  const card = getGmailCard();
  expect(card.printJson()).toMatchSnapshot();
});
