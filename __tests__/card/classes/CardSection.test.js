const CardSection = require('../../../src/card/classes/CardSection')
const Widget = require('../../../src/card/classes/Widget')
const Button = require('../../../src/card/classes/Button')

describe('CardSection', () => {
  it('Should add widget', () => {
    const cardSection = new CardSection().addWidget(new Widget())

    expect(cardSection.getData()).toEqual({
      widgets: [{}],
    })
  })

  it('Should add button widget', () => {
    const cardSection = new CardSection().addWidget(new Button())

    expect(cardSection.getData()).toEqual({
      widgets: [{
        buttons: [{}],
      }],
    })
  })

  it('Should throw an exception on add widget', () => {
    expect(new CardSection().addWidget)
      .toThrowError('Invalid value passed for "addWidget"')
  })

  it('Should set collapsible', () => {
    const cardSection = new CardSection().setCollapsible(true)

    expect(cardSection.getData()).toEqual({
      collapsible: true,
      widgets: [],
    })
  })

  it('Should set header', () => {
    const cardSection = new CardSection().setHeader('header')

    expect(cardSection.getData()).toEqual({
      header: 'header',
      widgets: [],
    })
  })

  it('Should set numUncollapsibleWidgets', () => {
    const cardSection = new CardSection().setNumUncollapsibleWidgets(5)

    expect(cardSection.getData()).toEqual({
      uncollapsiblewidgetsNum: 5,
      widgets: [],
    })
  })
})
