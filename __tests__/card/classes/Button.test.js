const Button = require('../../../src/card/classes/Button')
const Action = require('../../../src/card/classes/Action')
const OpenLink = require('../../../src/card/classes/OpenLink')

describe('Button', () => {
  it('Should set onClick action', () => {
    const data = new Button()
      .setOnClickAction(new Action())
      .getData()

    expect(data).toEqual({ onClick: { action: {} } })
  })

  it('Should throw an exception on set onClickAction', () => {
    expect(new Button().setOnClickAction)
      .toThrowError('Invalid value passed for "setOnClickAction"')
  })

  it('Should set openLink', () => {
    const data = new Button()
      .setOpenLink(new OpenLink())
      .getData()

    expect(data).toEqual({ onClick: { openLink: {} } })
  })

  it('Should throw an exception on set openLink', () => {
    expect(new Button().setOpenLink)
      .toThrowError('Invalid value passed for "setOpenLink"')
  })
})
