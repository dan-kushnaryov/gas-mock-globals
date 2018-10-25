// Global Services
const Utilities = require('./utilities/Utilities')
const ScriptApp = require('./script/ScriptApp')
const OAuth2 = require('./auth/OAuth2')
const CardService = require('./card/CardService')
const CacheService = require('./cache/CacheService')
const PropertiesService = require('./properties/PropertiesService')
const UrlFetchApp = require('./url-fetch/UrlFetchApp')
const Session = require('./base/classes/Session')

// Card Classes
const Card = require('./card/classes/Card')
const CardHeader = require('./card/classes/CardHeader')
const CardBuilder = require('./card/classes/CardBuilder')
const CardSection = require('./card/classes/CardSection')
const KeyValue = require('./card/classes/KeyValue')
const Action = require('./card/classes/Action')
const AuthorizationAction = require('./card/classes/AuthorizationAction')
const TextButton = require('./card/classes/TextButton')
const ImageButton = require('./card/classes/ImageButton')
const OpenLink = require('./card/classes/OpenLink')
const ButtonSet = require('./card/classes/ButtonSet')
const CardAction = require('./card/classes/CardAction')
const TextParagraph = require('./card/classes/TextParagraph')
const TextInput = require('./card/classes/TextInput')
const SelectionInput = require('./card/classes/SelectionInput')
const Image = require('./card/classes/Image')
const UniversalActionResponseBuilder = require('./card/classes/UniversalActionResponseBuilder')

global.Utilities = Utilities
global.ScriptApp = ScriptApp
global.OAuth2 = OAuth2
global.CardService = CardService
global.CacheService = CacheService
global.PropertiesService = PropertiesService
global.UrlFetchApp = UrlFetchApp
global.Session = Session

module.exports = {
  CardService,
  CacheService,
  PropertiesService,
  UrlFetchApp,
  Card,
  CardHeader,
  CardBuilder,
  CardSection,
  KeyValue,
  Action,
  AuthorizationAction,
  TextButton,
  ImageButton,
  OpenLink,
  ButtonSet,
  CardAction,
  TextParagraph,
  TextInput,
  SelectionInput,
  Image,
  UniversalActionResponseBuilder,
}
