import Action from '../../../src/card/classes/Action';
import CardAction from '../../../src/card/classes/CardAction';
import OpenLink from '../../../src/card/classes/OpenLink';

describe('CardAction', () => {
  it('Should set the text', () => {
    const cardAction = new CardAction().setText('text');

    expect(cardAction.getData()).toEqual({
      actionLabel: 'text',
    });
  });

  it('Should set open link', () => {
    const cardAction = new CardAction().setOpenLink(new OpenLink());

    expect(cardAction.getData()).toEqual({
      onClick: {
        openLink: {},
      },
    });
  });

  it('Should throw an exception on set openLink', () => {
    expect(new CardAction().setOpenLink).toThrowError('Invalid value passed for "setOpenLink"');
  });

  it('Should throw an exception when try to call setOnClickAction without an action', () => {
    expect(new CardAction().setOnClickAction).toThrowError(
      'Invalid value passed for "setOnClickAction"'
    );
  });

  it('Should set the on click action', () => {
    const onClickAction = new CardAction().setOnClickAction(new Action());
    expect(onClickAction.getData()).toEqual({
      onClick: {
        action: {},
      },
    });
  });
});
