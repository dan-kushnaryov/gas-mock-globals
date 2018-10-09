const KeyValue = require('../../../src/card/classes/KeyValue')
const Button = require('../../../src/card/classes/Button')
const Action = require('../../../src/card/classes/Action')
const OpenLink = require('../../../src/card/classes/OpenLink')

describe('KeyValue', () => {
  it('Should set button label', () => {
    const keyValue = new KeyValue().setBottomLabel('label')

    expect(keyValue.getData()).toEqual({
      keyValue: {
        bottomLabel: 'label',
      },
    })
  })

  it('Should set button', () => {
    const keyValue = new KeyValue().setButton(new Button())

    expect(keyValue.getData()).toEqual({
      keyValue: {
        textButton: {},
      },
    })
  })

  it('Should throw an exception on set button', () => {
    expect(new KeyValue().setButton)
      .toThrowError('Invalid value passed for "setButton"')
  })

  it('Should set content', () => {
    const keyValue = new KeyValue().setContent('content')

    expect(keyValue.getData()).toEqual({
      keyValue: {
        content: 'content',
      },
    })
  })

  it('Should set icon url', () => {
    const keyValue = new KeyValue().setIconUrl('url')

    expect(keyValue.getData()).toEqual({
      keyValue: {
        iconUrl: 'url',
      },
    })
  })

  it('Should set multiline', () => {
    const keyValue = new KeyValue().setMultiline(true)

    expect(keyValue.getData()).toEqual({
      keyValue: {
        multiline: true,
      },
    })
  })

  it('Should set onClickAction', () => {
    const keyValue = new KeyValue().setOnClickAction(new Action())

    expect(keyValue.getData()).toEqual({
      keyValue: {
        onClick: {
          action: {},
        },
      },
    })
  })

  it('Should throw an exception on set onClickAction', () => {
    expect(new KeyValue().setOnClickAction)
      .toThrowError('Invalid value passed for "setOnClickAction"')
  })

  it('Should set openLink', () => {
    const keyValue = new KeyValue().setOpenLink(new OpenLink())

    expect(keyValue.getData()).toEqual({
      keyValue: {
        openLink: {},
      },
    })
  })

  it('Should throw an exception on set openLink', () => {
    expect(new KeyValue().setOpenLink)
      .toThrowError('Invalid value passed for "setOpenLink"')
  })

  it('Should set top label', () => {
    const keyValue = new KeyValue().setTopLabel('label')

    expect(keyValue.getData()).toEqual({
      keyValue: {
        topLabel: 'label',
      },
    })
  })
})
