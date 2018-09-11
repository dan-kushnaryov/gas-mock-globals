const Cache = require('../../../src/cache/classes/Cache')

describe('Cache', () => {
  let cache

  beforeEach(() => {
    cache = Object.assign(new Cache(), {
      _data: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      }
    })
  })

  it('Should get all of the properties in cache', () => {
    expect(cache.getAll()).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    })
  })

  it('Should get the property from the cache', () => {
    expect(cache.get('key1')).toBe('value1')
    expect(cache.get('key2')).toBe('value2')
    expect(cache.get('key3')).toBe('value3')
    expect(cache.get('unknown')).toBe(null)
  })

  it('Should get the list of properties from the cache', () => {
    expect(cache.getAll(['key1'])).toEqual({ key1: 'value1' })
    expect(cache.getAll(['key1', 'key2', 'key3'])).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    })
  })

  it('Should put the new property into the cache', () => {
    cache.put('key4', 'value4')

    expect(cache.get('key4')).toBe('value4')
  })

  it('It should put the list of properties into the cache', () => {
    cache.putAll({ key4: 'value4', key5: 'value5' })

    expect(cache.getAll(['key1', 'key4', 'key5'])).toEqual({
      key1: 'value1',
      key4: 'value4',
      key5: 'value5',
    })
  })

  it('Should remove the property from the cache', () => {
    cache.remove('key1')

    expect(cache.getAll(['key1', 'key2', 'key3'])).toEqual({
      key2: 'value2',
      key3: 'value3',
    })
  })

  it('Should remove the list of properties from the cache', () => {
    cache.removeAll(['key1', 'key3'])

    expect(cache.getAll(['key1', 'key2', 'key3'])).toEqual({ key2: 'value2' })
  })
})
