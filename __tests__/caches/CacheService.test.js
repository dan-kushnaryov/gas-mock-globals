const Cache = require('../../src/cache/classes/Cache')
const CacheService = require('../../src/cache/CacheService')

describe('CacheService', () => {
  it('it should return the new instance of classes.Cache', () => {
    expect(CacheService.getDocumentationCache()).toBeInstanceOf(Cache)
    expect(CacheService.getScriptCache()).toBeInstanceOf(Cache)
    expect(CacheService.getUserCache()).toBeInstanceOf(Cache)
  })
})
