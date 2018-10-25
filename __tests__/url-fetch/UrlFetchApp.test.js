const UrlFetchApp = require('../../src/url-fetch/UrlFetchApp')
const HttpResponse = require('../../src/url-fetch/classes/HttpResponse')

describe('UrlFetchApp', () => {
  it('Should fetch the request', () => {
    expect(UrlFetchApp.fetch('request1')).toBeInstanceOf(HttpResponse)
  })

  it('Should fetch multiple requests', () => {
    const responses = UrlFetchApp.fetchAll('request1', 'request2')

    expect(responses).toHaveLength(2)
    expect(responses[0]).toBeInstanceOf(HttpResponse)
    expect(responses[1]).toBeInstanceOf(HttpResponse)
    expect(responses[0]).not.toBe(responses[1])
  })

  it('Should get the request', () => {
    expect(UrlFetchApp.getRequest('request1')).toEqual({})
  })
})
