import ButtonSet from '../../../src/card/classes/ButtonSet';
import Button from '../../../src/card/classes/Button';

describe('ButtonSet', () => {
  it('Should add the button', () => {
    const data = new ButtonSet().addButton(new Button()).addButton(new Button()).getData();

    expect(data).toEqual({ buttons: [{}, {}] });
  });
});
