import Action from '../../../src/card/classes/Action';

describe('Action', () => {
  it('Should set the function name', () => {
    const data = new Action().setFunctionName('test-fn-name').getData();

    expect(data).toEqual({ actionMethodName: 'test-fn-name' });
  });

  it('Should set the parameters', () => {
    const data = new Action().setParameters({ test: 'test-parameter' }).getData();

    expect(data).toEqual({ parameters: { test: 'test-parameter' } });
  });
});
