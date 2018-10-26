# Gas Mock Globals

[![Build Status](https://travis-ci.com/dan-kushnaryov/gas-mock-globals.svg?branch=master)](https://travis-ci.com/dan-kushnaryov/gas-mock-globals)
[![codecov](https://codecov.io/gh/dan-kushnaryov/gas-mock-globals/branch/master/graph/badge.svg)](https://codecov.io/gh/dan-kushnaryov/gas-mock-globals)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

This is a collection of (Google Apps Script services)[https://developers.google.com/apps-script/reference/] polyfills which can be used to mock Apps Script globals in your tests.

## Installation

```bash
npm install --save-dev gas-mock-globals
```

## Usage

Add import statement to the top of your script to load polyfills into global scope:

``` javascript
import 'gas-mock-globals'   // es-modules
require('gas-mock-globals') // common-js
```

Or use exact class without global namespace pollution:

```javascript
import CardService from 'gas-mock-globals/src/card/CardService'
import Utilities from 'gas-mock-globals/src/utilities/Utilities'

const cardSection = CardService.newCardSection();
// Finish building the card section ...

const header = CardService.newCardHeader().setTitle(Utilities.base64Encode('Card title'))

const card = CardService.newCardBuilder()
  .setName('Card name')
  .setHeader(header)
  .addSection(cardSection)
  .build();
```

And then you can use any JS testing framework to test your code intended to run on Apps Script environment:

```javascript
// apps-script-code-module.js
function dummyFunction () {
  PropertiesService.getUserProperties().setProperty('DAYS_TO_FETCH', '5');
  Logger.log('Current user\'s email', Session.getActiveUser().getEmail())
  Logger.log('Encoded value', Utilities.base64Encode('john doe'))
  return 'i\'m dummy'
}

// test
test('dummy test', () => {
  expect(dummyFunction()).toEqual('i\'m dummy')
})
```

See more examples in (examples)[./examples] directory.

## Contribution

To contribute you should make sure that:

* you've covered your code with tests
* all the tests pass if you run `npm test`

## Useful links

  * [Google Apps Script](https://developers.google.com/apps-script/)
