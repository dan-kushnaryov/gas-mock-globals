import Properties from '../../../src/properties/classes/Properties';

describe('Properties', () => {
  let properties: Properties;

  beforeEach(() => {
    properties = new Properties();
    properties.setProperties({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    });
  });

  afterEach(() => {
    properties.deleteAllProperties();
  });

  it('Should get the property by key', () => {
    expect(properties.getProperty('key1')).toBe('value1');
    expect(properties.getProperty('key2')).toBe('value2');
    expect(properties.getProperty('key3')).toBe('value3');
    expect(properties.getProperty('unknown')).toBe(null);
  });

  it('Should get all properties', () => {
    expect(properties.getProperties()).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    });
  });

  it('Should set the new property', () => {
    expect(properties.setProperty('key4', 'value4').getProperty('key4')).toBe('value4');
  });

  it('Should update an existing property', () => {
    expect(properties.setProperty('key3', 'value').getProperty('key3')).toBe('value');
  });

  it('Should set a bunch of properties', () => {
    const props = properties.setProperties({ key3: 'value4', key4: 'value5' }).getProperties();

    expect(props).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value4',
      key4: 'value5',
    });
  });

  it('Should reset a bunch of properties', () => {
    const props = properties
      .setProperties({ key3: 'value4', key4: 'value5' }, true)
      .getProperties();

    expect(props).toEqual({ key3: 'value4', key4: 'value5' });
  });

  it('Should return all keys of properties', () => {
    expect(properties.getKeys()).toEqual(['key1', 'key2', 'key3']);
  });

  it('Should remove the property', () => {
    const props = properties.deleteProperty('key1').getProperties();

    expect(props).toEqual({
      key2: 'value2',
      key3: 'value3',
    });
  });

  it('Should remove all properties', () => {
    expect(properties.deleteAllProperties().getProperties()).toEqual({});
  });

  test('Writes to one Properties should be visible to others', () => {
    const otherProperties = new Properties();
    properties.setProperty('foo', 'bar');
    expect(otherProperties.getProperty('foo')).toEqual('bar');
  });
});
