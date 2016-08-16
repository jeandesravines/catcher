# catcher

Functional errors interceptions

## Table of contents

* [Setup](#setup)
* [Usage](#usage)
* [Examples](#examples)
* [Contributing](#contributing)
* [Tests](#tests)
 

## Setup

This module can then be installed with npm:
```shell
$ npm install @jdes/catcher
```


## Usage

Import module:

```javascript
/**
 * @type {function}
 */
const catcher = require('@jdes/catcher');
```

## API

### Methodq

#### catcher(fn: function: * [, defaults: * = undefined]): *

* `fn`: The function to execute and which can throws an Error.
* `direction`: The defaults value to return if `fn` fails

Execute the function `fn` surrounding with try/catch block. 
If all is ok, `catcher` returns the value returned by `fn`.


## Examples

### With "fs" package

```javascript
const fs = require('fs');
const catcher = require('@jdes/catcher');

// Call fs.accessSync which throws an error with unknown path
const exists = catcher(() => fs.accessSync('./unknown')) ? true : false;
```

### Default value

```javascript
// Check if Date.now() is modulo 2 with default value
const modulo = catcher(() => {
    if (Date.now() % 2) {
        throw new Error();
    }
    
    return true;
}, false);
```


## Contributing

Contributions are appreciated, both in the form of bug reports and pull requests.
All pull requests have to pass tests and have a sufficient coverage.

## Tests

You can run the tests with npm:
```shell
$ npm test
```


The tests use [Mocha](http://mochajs.org) as the test framework and [Chai](http://http://chaijs.com) as the BDD assertion framework.
The coverage is measured with [Istanbul](https://github.com/gotwarlost/istanbul).