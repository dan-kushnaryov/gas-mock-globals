/* eslint-disable no-undef */
import '../src';
import Session from '../src/base/classes/Session';
import { doesUserSpeakEnglish, dummyFunction, getGmailCard } from './code';

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
