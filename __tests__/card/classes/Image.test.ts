import Image from '../../../src/card/classes/Image';

describe('Image', () => {
  it('Should set image url', () => {
    const image = new Image().setImageUrl('url');

    expect(image.getData()).toEqual({ url: 'url' });
  });
});
