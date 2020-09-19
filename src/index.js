// Global Services
const Utilities = require('./utilities/Utilities')
const ScriptApp = require('./script/ScriptApp')
const OAuth2 = require('./auth/OAuth2')
const CardService = require('./card/CardService')
const CacheService = require('./cache/CacheService')
const PropertiesService = require('./properties/PropertiesService')
const UrlFetchApp = require('./url-fetch/UrlFetchApp')
const UrlFetchAppStubConfiguration = require('./url-fetch/classes/UrlFetchAppStubConfiguration')
const Session = require('./base/classes/Session')
const Logger = require('./base/classes/Logger')

global.Utilities = Utilities
global.ScriptApp = ScriptApp
global.OAuth2 = OAuth2
global.CardService = CardService
global.CacheService = CacheService
global.PropertiesService = PropertiesService
global.UrlFetchApp = UrlFetchApp
global.Session = Session
global.Logger = Logger
global.UrlFetchAppStubConfiguration = UrlFetchAppStubConfiguration