# Gas Mock Globals

This library is dedicated to mock the [google apps script services](https://developers.google.com/apps-script/reference/)

It accumulates data which can be useful for writing tests and debugging the codebase.

## Installation

```bash
npm install --save-dev gas-mock-globals
```

## Usage

``` javascript
import { Card } from 'gas-mock-globals'
```

or in Common.js

``` javascript
const Card = require('gas-mock-globals')
```

## Test example ([Jest](https://jestjs.io/))

``` javascript
import { Card } from 'gas-mock-globals'
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
>>>

## Useful links

  * [Google Apps Script](https://developers.google.com/apps-script/)