# Gas Mock Service

This library is dedicated to mock the [google apps script services](https://developers.google.com/apps-script/reference/) 

It accumulates data which can be useful for writing tests and debugging the codebase.

## Test
```bash
> npm test
```

# Publish

```bash
> npm run build
> npm version
> npm publish --access public
```

## Useful links

  * [Google Apps Script](https://developers.google.com/apps-script/)

## Script services

* [CardService:](https://developers.google.com/apps-script/reference/card-service/card-service)
  * Classes:
    * Action
    * AuthorizationAction
    * Button
    * ButtonSet
    * Card
    * CardAction
    * CardBuilder
    * CardHeader
    * CardSection
    * Image
    * ImageButton
    * KeyValue
    * OpenLink
    * SectionInput
    * TextButton
    * TextInput
    * UniversalActionResponseBuilder
    * Widget
  * Enums:
    * [ComposedEmailType](https://developers.google.com/apps-script/reference/card-service/composed-email-type)
    * [Icon](https://developers.google.com/apps-script/reference/card-service/icon)
    * [ImageStyle](https://developers.google.com/apps-script/reference/card-service/image-style)
    * [LoadIndicator](https://developers.google.com/apps-script/reference/card-service/load-indicator)
    * [NotificationType](https://developers.google.com/apps-script/reference/card-service/notification-type)
    * [OnClose](https://developers.google.com/apps-script/reference/card-service/on-close)
    * [OpenAs](https://developers.google.com/apps-script/reference/card-service/open-as)
    * [SelectionInputType](https://developers.google.com/apps-script/reference/card-service/selection-input-type)
* [PropertiesService:](https://developers.google.com/apps-script/reference/properties/properties-service)
  * Classes:
    * Properties
* [CacheService:](https://developers.google.com/apps-script/reference/cache/cache-service)
  * Classes:
    * Cache