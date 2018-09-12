import CardHeader from '../../../src/card/classes/CardHeader'

describe('CardHeader', () => {
  it('Should set the title', () => {
    expect((new CardHeader()).setTitle('test-title').getData())
      .toEqual({ title: 'test-title' })
  })

  it('Should set the image style', () => {
    expect((new CardHeader()).setImageStyle('test-image-style').getData())
      .toEqual({ imageStyle: 'test-image-style' })
  })

  it('Should set the image url', () => {
    expect((new CardHeader()).setImageUrl('test-image-url').getData())
      .toEqual({ imageUrl: 'test-image-url' })
  })

  it('Should set subtitle', () => {
    expect((new CardHeader()).setSubtitle('test-subtitle').getData())
      .toEqual({ subTitle: 'test-subtitle' })
  })
})
