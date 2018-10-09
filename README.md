# Gas Mock Service

This library is dedicated to mock the [google apps script services](https://developers.google.com/apps-script/reference/)

It accumulates data which can be useful for writing tests and debugging the codebase.

## Installation

```bash
npm install --save-dev gas-mock-service
```

## Usage

``` javascript
import { Card } from 'gas-mock-service'
```

or in Common.js

``` javascript
const Card = require('gas-mock-service')
```

## Test example ([Jest](https://jestjs.io/))

``` javascript
import { Card } from 'gas-mock-service'
import GenericView from 'src/views/Generic'
import data from '../helpers/mocks/responses/getData.json'

describe('Generic View', () => {
  it('Runs the render method and checks the returned data is a card instance', () => {
    const card = new GenericView({ data }).render()

    expect(card).toBeInstanceOf(Card)
    expect(card.printJson()).toMatchSnapshot()
  })
})
```

As you can see using mock services is super easy and straightforward. All you have to do is import the specific class to your test file.
In our expample we use mock API response to use that data in `GenericView` constructor call.
Also, we check if the JSON representation of the view corresponds the snapshot.

## Contribution

### Running tests

```bash
npm test
```

### Publish

```bash
npm version
npm publish --access public
```

>>>
**NOTE** that to contribute you should make sure that:

* you've covered your code with tests
* all the tests pass if you run `npm test`
* you added your newe added class/service to readme and follow the highlighting pattern

>>>

## Useful links

  * [Google Apps Script](https://developers.google.com/apps-script/)

## Script services

* [`CardService`](https://developers.google.com/apps-script/reference/card-service/card-service)
  Classes[^1]:
  * [**`Action`**](https://developers.google.com/apps-script/reference/card-service/action)
    * [**`setFunctionName(functionName)`**](https://developers.google.com/apps-script/reference/card-service/action#setFunctionName(String))
    * [**`setLoadIndicator(loadIndicator)`**](https://developers.google.com/apps-script/reference/card-service/action#setLoadIndicator(LoadIndicator))
    * [**`setParameters(parameters)`**](https://developers.google.com/apps-script/reference/card-service/action#setParameters(Object))
  * [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response)
    * [`printJson()`](https://developers.google.com/apps-script/reference/card-service/action-response#printJson())
  * [`ActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/action-response-builder)
    * [`build()`](https://developers.google.com/apps-script/reference/card-service/action-response-builder#build())
    * [`setNavigation(navigation)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder#setNavigation(Navigation))
    * [`setNotification(notification)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder#setNotification(Notification))
    * [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder#setOpenLink(OpenLink))
    * [`setStateChanged(stateChanged)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder#setStateChanged(Boolean))
  * [**`AuthorizationAction`**](https://developers.google.com/apps-script/reference/card-service/authorization-action)
    * [**`setAuthorizationUrl(authorizationUrl)`**](https://developers.google.com/apps-script/reference/card-service/authorization-action#setAuthorizationUrl(String))
  * [`AuthorizationException`](https://developers.google.com/apps-script/reference/card-service/authorization-exception)
    * [`printJson()`](https://developers.google.com/apps-script/reference/card-service/authorization-exception#printJson())
    * [`setAuthorizationUrl(authUrl)`](https://developers.google.com/apps-script/reference/card-service/authorization-exception#setAuthorizationUrl(String))
    * [`setCustomUiCallback(callback)`](https://developers.google.com/apps-script/reference/card-service/authorization-exception#setCustomUiCallback(String))
    * [`setResourceDisplayName(name)`](https://developers.google.com/apps-script/reference/card-service/authorization-exception#setResourceDisplayName(String))
    * [`throwException()`](https://developers.google.com/apps-script/reference/card-service/authorization-exception)
  * [`Button`](https://developers.google.com/apps-script/reference/card-service/button)
    * [**`setAuthorizationAction(action)`**](https://developers.google.com/apps-script/reference/card-service/button#setAuthorizationAction(AuthorizationAction))
    * [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/button#setComposeAction(Action,ComposedEmailType))
    * [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/button#setOnClickAction(Action))
    * [**`setOnClickOpenLinkAction(action)`**](https://developers.google.com/apps-script/reference/card-service/button#setOnClickOpenLinkAction(Action))
    * [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/button#setOpenLink(OpenLink))
  * [**`ButtonSet`**](https://developers.google.com/apps-script/reference/card-service/button-set)
    * [**`addButton(button)`**](https://developers.google.com/apps-script/reference/card-service/button-set#addButton(Button))
  * [**`Card`**](https://developers.google.com/apps-script/reference/card-service/card)
    * [**`printJson()`**](https://developers.google.com/apps-script/reference/card-service/card#printJson())
  * [`CardAction`](https://developers.google.com/apps-script/reference/card-service/card-action)
    * [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action#setAuthorizationAction(AuthorizationAction))
    * [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/card-action#setComposeAction(Action,ComposedEmailType))
    * [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action#setOnClickAction(Action))
    * [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action#setOnClickOpenLinkAction(Action))
    * [**`setOpenLink(openLink)`**](https://developers.google.com/apps-script/reference/card-service/card-action#setOpenLink(OpenLink))
    * [**`setText(text)`**](https://developers.google.com/apps-script/reference/card-service/card-action#setText(String))
  * [`CardBuilder`](https://developers.google.com/apps-script/reference/card-service/card-builder)
    * [**`addCardAction(cardAction)`**](https://developers.google.com/apps-script/reference/card-service/card-builder#addCardAction(CardAction))
    * [**`addSection(section)`**](https://developers.google.com/apps-script/reference/card-service/card-builder#addSection(CardSection))
    * [**`build()`**](https://developers.google.com/apps-script/reference/card-service/card-builder#build())
    * [**`setHeader(CardHeader)`**](https://developers.google.com/apps-script/reference/card-service/card-builder#setHeader(CardHeader))
    * [**`setName(name)`**](https://developers.google.com/apps-script/reference/card-service/card-builder#setName(String))
  * [`CardHeader`](https://developers.google.com/apps-script/reference/card-service/card-header)
    * [`setImageAltText(imageAltText)`](https://developers.google.com/apps-script/reference/card-service/card-header#setImageAltText(String))
    * [**`setImageStyle(imageStyle)`**](https://developers.google.com/apps-script/reference/card-service/card-header#setImageStyle(ImageStyle))
    * [**`setImageUrl(imageUrl)`**](https://developers.google.com/apps-script/reference/card-service/card-header#setImageUrl(String))
    * [**`setSubtitle(subtitle)`**](https://developers.google.com/apps-script/reference/card-service/card-header#setSubtitle(String))
    * [**`setTitle(title)`**](https://developers.google.com/apps-script/reference/card-service/card-header#setTitle(String))
  * [**`CardSection`**](https://developers.google.com/apps-script/reference/card-service/card-section)
    * [**`addWidget(widget)`**](https://developers.google.com/apps-script/reference/card-service/card-section#addWidget(Widget))
    * [**`setCollapsible(collapsible)`**](https://developers.google.com/apps-script/reference/card-service/card-section#setCollapsible(Boolean))
    * [**`setHeader(String)`**](https://developers.google.com/apps-script/reference/card-service/card-section#setHeader(String))
    * [**`setNumUncollapsibleWidgets(numUncollapsibleWidgets)`**](https://developers.google.com/apps-script/reference/card-service/card-section#setNumUncollapsibleWidgets(Integer))
  * [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response)
    * [`printJson()`](https://developers.google.com/apps-script/reference/card-service/compose-action-response)
  * [`ComposeActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder)
    * [`build()`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder#build())
    * [`setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder#setGmailDraft(GmailDraft))
  * [`Image`](https://developers.google.com/apps-script/reference/card-service/image)
    * [`setAltText(altText)`](https://developers.google.com/apps-script/reference/card-service/image#setAltText(String))
    * [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image#setAuthorizationAction(AuthorizationAction))
    * [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image#setComposeAction(Action,ComposedEmailType))
    * [**`setImageUrl(url)`**](https://developers.google.com/apps-script/reference/card-service/image#setImageUrl(String))
    * [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image#setOnClickAction(Action))
    * [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image#setOnClickOpenLinkAction(Action))
    * [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image#setOpenLink(OpenLink))
  * [`ImageButton`](https://developers.google.com/apps-script/reference/card-service/image-button)
    * [`setAltText(altText)`](https://developers.google.com/apps-script/reference/card-service/image-button#setAltText(String))
    * [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button#setAuthorizationAction(AuthorizationAction))
    * [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image-button#setComposeAction(Action,ComposedEmailType))
    * [`setIcon(icon)`](https://developers.google.com/apps-script/reference/card-service/image-button#setIcon(Icon))
    * [**`setIconUrl(url)`**](https://developers.google.com/apps-script/reference/card-service/image-button#setIconUrl(String))
    * [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button#setOnClickAction(Action))
    * [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button#setOnClickOpenLinkAction(Action))
    * [**`setOpenLink(OpenLink)`**](https://developers.google.com/apps-script/reference/card-service/image-button#setOpenLink(OpenLink))
  * [`KeyValue`](https://developers.google.com/apps-script/reference/card-service/key-value)
    * [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value#setAuthorizationAction(AuthorizationAction))
    * [**`setBottomLabel(text)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setBottomLabel(String))
    * [**`setButton(button)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setButton(Button))
    * [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/key-value#setComposeAction(Action,ComposedEmailType))
    * [**`setContent(text)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setContent(String))
    * [`setIcon(icon)`](https://developers.google.com/apps-script/reference/card-service/key-value#setIcon(Icon))
    * [`setIconAltText(altText)`](https://developers.google.com/apps-script/reference/card-service/key-value#setIconAltText(String))
    * [**`setMultiline(multiline)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setMultiline(Boolean))
    * [**`setOnClickAction(action)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setOnClickAction(Action))
    * [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value#setOnClickOpenLinkAction(Action))
    * [**`setOpenLink(openLink)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setOpenLink(OpenLink))
    * [`setSwitch(switchToSet)`](https://developers.google.com/apps-script/reference/card-service/key-value#setSwitch(Switch))
    * [**`setTopLabel(text)`**](https://developers.google.com/apps-script/reference/card-service/key-value#setTopLabel(String))
  * [`Navigation`](https://developers.google.com/apps-script/reference/card-service/navigation)
    * [`popCard()`](https://developers.google.com/apps-script/reference/card-service/navigation#popCard())
    * [`popToNamedCard(cardName)`](https://developers.google.com/apps-script/reference/card-service/navigation#popToNamedCard(String))
    * [`popToRoot()`](https://developers.google.com/apps-script/reference/card-service/navigation#popToRoot())
    * [`printJson()`](https://developers.google.com/apps-script/reference/card-service/navigation#printJson())
    * [`pushCard(card)`](https://developers.google.com/apps-script/reference/card-service/navigation#pushCard(Card))
    * [`updateCard(card)`](https://developers.google.com/apps-script/reference/card-service/navigation#updateCard(Card))
  * [`Notification`](https://developers.google.com/apps-script/reference/card-service/notification)
    * [`setText(text)`](https://developers.google.com/apps-script/reference/card-service/notification#setText(String))
    * [`setType(type)`](https://developers.google.com/apps-script/reference/card-service/notification#setType(NotificationType))
  * [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link)
    * [`setOnClose(onClose)`](https://developers.google.com/apps-script/reference/card-service/open-link#setOnClose(OnClose))
    * [**`setOpenAs(openAs)`**](https://developers.google.com/apps-script/reference/card-service/open-link#setOpenAs(OpenAs))
    * [**`setUrl(url)`**](https://developers.google.com/apps-script/reference/card-service/open-link#setUrl(String))
  * [`SectionInput`](https://developers.google.com/apps-script/reference/card-service/selection-input)
    * [**`addItem(text, value, selected)`**](https://developers.google.com/apps-script/reference/card-service/selection-input#addItem(Object,Object,Boolean))
    * [**`setFieldName(fieldName)`**](https://developers.google.com/apps-script/reference/card-service/selection-input#setFieldName(String))
    * [`setOnChangeAction(action)`](https://developers.google.com/apps-script/reference/card-service/selection-input#setOnChangeAction(Action))
    * [**`setTitle(title)`**](https://developers.google.com/apps-script/reference/card-service/selection-input#setTitle(String))
    * [**`setType(type)`**](https://developers.google.com/apps-script/reference/card-service/selection-input#setType(SelectionInputType))
  * [**`Suggestions`**](https://developers.google.com/apps-script/reference/card-service/suggestions)
    * [**`addSuggestion(suggestion)`**](https://developers.google.com/apps-script/reference/card-service/suggestions#addSuggestion(String))
    * [**`addSuggestions(suggestions)`**](https://developers.google.com/apps-script/reference/card-service/suggestions#addSuggestions(Object))
  * [`SuggestionsResponse`](https://developers.google.com/apps-script/reference/card-service/suggestions-response)
    * [`printJson()`](https://developers.google.com/apps-script/reference/card-service/suggestions-response#printJson())
  * [`SuggestionsResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder)
    * [`build()`](https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder#build())
    * [`setSuggestions(suggestions)`](https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder#setSuggestions(Suggestions))
  * [`Switch`](https://developers.google.com/apps-script/reference/card-service/switch)
    * [`setFieldName(fieldName)`](https://developers.google.com/apps-script/reference/card-service/switch#setFieldName(String))
    * [`setOnChangeAction(action)`](https://developers.google.com/apps-script/reference/card-service/switch#setOnChangeAction(Action))
    * [`setSelected(selected)`](https://developers.google.com/apps-script/reference/card-service/switch#setSelected(Boolean))
    * [`setValue(value)`](https://developers.google.com/apps-script/reference/card-service/switch#setValue(String))
  * [`TextButton`](https://developers.google.com/apps-script/reference/card-service/text-button)
    * [**`setAuthorizationAction(action)`**](https://developers.google.com/apps-script/reference/card-service/text-button#setAuthorizationAction(AuthorizationAction))
    * [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/text-button#setComposeAction(Action,ComposedEmailType))
    * [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickAction(Action))
    * [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickOpenLinkAction(Action))
    * [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/text-button#setOpenLink(OpenLink))
    * [**`setText(text)`**](https://developers.google.com/apps-script/reference/card-service/text-button#setText(String))
  * [**`TextInput`**](https://developers.google.com/apps-script/reference/card-service/text-input)
    * [**`setFieldName(fieldName)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setFieldName(String))
    * [**`setHint(hint)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setHint(String))
    * [**`setMultiline(multiline)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setmultilinemultiline)
    * [**`setOnChangeAction(action)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setonchangeactionaction)
    * [**`setSuggestions(suggestions)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setsuggestionssuggestions)
    * [**`setSuggestionsAction(suggestionsAction)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setsuggestionsactionsuggestionsaction)
    * [**`setTitle(title)`**](https://developers.google.com/apps-script/reference/card-service/text-input#settitletitle)
    * [**`setValue(value)`**](https://developers.google.com/apps-script/reference/card-service/text-input#setvaluevalue)
  * [**`TextParagraph`**](https://developers.google.com/apps-script/reference/card-service/text-paragraph)
    * [**`setText(text)`**](https://developers.google.com/apps-script/reference/card-service/text-paragraph#setText(String))
  * [`UniversalActionResponse`](https://developers.google.com/apps-script/reference/card-service/universal-action-response)
    * [`printJson()`](https://developers.google.com/apps-script/reference/card-service/universal-action-response#printJson())
  * [**`UniversalActionResponseBuilder`**](https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder)
    * [**`build()`**](https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#build())
    * [**`displayAddOnCards(cardObjects)`**](https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#displayAddOnCards(Object))
    * [**`setOpenLink(openLink)`**](https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#setOpenLink(OpenLink))
  * [**`Widget`**](https://developers.google.com/apps-script/reference/card-service/widget)
  Enums:
  * [**`ComposedEmailType`**](https://developers.google.com/apps-script/reference/card-service/composed-email-type)
  * [**`Icon`**](https://developers.google.com/apps-script/reference/card-service/icon)
  * [**`ImageStyle`**](https://developers.google.com/apps-script/reference/card-service/image-style)
  * [**`LoadIndicator`**](https://developers.google.com/apps-script/reference/card-service/load-indicator)
  * [**`NotificationType`**](https://developers.google.com/apps-script/reference/card-service/notification-type)
  * [**`OnClose`**](https://developers.google.com/apps-script/reference/card-service/on-close)
  * [**`OpenAs`**](https://developers.google.com/apps-script/reference/card-service/open-as)
  * [**`SelectionInputType`**](https://developers.google.com/apps-script/reference/card-service/selection-input-type)
* [`PropertiesService`](https://developers.google.com/apps-script/reference/properties/properties-service)
  Classes:
  * [`Properties`](https://developers.google.com/apps-script/reference/properties/properties)
    * [**`deleteAllProperties()`**](https://developers.google.com/apps-script/reference/properties/properties#deleteAllProperties())
    * [**`deleteProperty(key)`**](https://developers.google.com/apps-script/reference/properties/properties#deleteProperty(String))
    * [**`getKeys()`**](https://developers.google.com/apps-script/reference/properties/properties#getKeys())
    * [**`getProperties()`**](https://developers.google.com/apps-script/reference/properties/properties#getProperties())
    * [**`getProperty(key)`**](https://developers.google.com/apps-script/reference/properties/properties#getProperty(String))
    * [**`setProperties(properties)`**](https://developers.google.com/apps-script/reference/properties/properties#setProperties(Object))
    * [`setProperties(properties, deleteAllOthers)`](https://developers.google.com/apps-script/reference/properties/properties#setProperties(Object,Boolean))
    * [**`setProperty(key, value)`**](https://developers.google.com/apps-script/reference/properties/properties#setProperty(String,String))
* [`CacheService`](https://developers.google.com/apps-script/reference/cache/cache-service)
  Classes:
  * [`Cache`](https://developers.google.com/apps-script/reference/cache/cache)
    * [**`get(key)`**](https://developers.google.com/apps-script/reference/cache/cache#get(String))
    * [**`getAll(keys)`**](https://developers.google.com/apps-script/reference/cache/cache#getAll(String))
    * [**`put(key, value)`**](https://developers.google.com/apps-script/reference/cache/cache#put(String,String))
    * [`put(key, value, expirationInSeconds)`](https://developers.google.com/apps-script/reference/cache/cache#put(String,String,Integer))
    * [**`putAll(values)`**](https://developers.google.com/apps-script/reference/cache/cache#putAll(Object))
    * [`putAll(values, expirationInSeconds)`](https://developers.google.com/apps-script/reference/cache/cache#putAll(Object,Integer))
    * [**`remove(key)`**](https://developers.google.com/apps-script/reference/cache/cache#remove(String))
    * [**`removeAll(keys)`**](https://developers.google.com/apps-script/reference/cache/cache#removeAll(String))

[^1]: All the `CardService` classes and their methods which are currently mocked in this library are marked as **bold**
