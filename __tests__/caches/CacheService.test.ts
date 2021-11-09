import CacheService from '../../src/cache/CacheService';
import Cache from '../../src/cache/classes/Cache';

describe('CacheService', () => {
  it('it should return the new instance of classes.Cache', () => {
    expect(CacheService.getDocumentationCache()).toBeInstanceOf(Cache);
    expect(CacheService.getScriptCache()).toBeInstanceOf(Cache);
    expect(CacheService.getUserCache()).toBeInstanceOf(Cache);
  });
});
