# Catcher

[![Build Status](https://travis-ci.org/jeandesravines/catcher.svg)](https://travis-ci.org/jeandesravines/catcher)
[![Coverage Status](https://coveralls.io/repos/github/jeandesravines/catcher/badge.svg?branch=master)](https://coveralls.io/github/jeandesravines/catcher?branch=master)

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

### Methods

#### catcher(fn: function: * [, defaults: * = undefined]): *

* `fn`: The function to execute and which can throws an Error.
* `direction`: The defaults value to return if `fn` fails

Execute the function `fn` surrounding with try/catch block. 
If all is ok, `catcher` returns the value returned by `fn`.


## Examples

### With "fs" package

```javascript
const fs = require('fs');
const promisify = require('@jdes/promisify');
const catcher = require('@jdes/catcher');

// Call fs.accessSync which throws an error with unknown path
const filename = './unknown';
const exists = catcher(() => fs.accessSync(filename)) ? true : false;

if (exists) {
    promisify(fs.readFile)(filename)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}
```

### With default value

```javascript
// Check if Date.now() is modulo 25 with default value and throw an Error else.
// The Error is catched by the catcher and returns the default value : false
const modulo = catcher(() => {
    if (Date.now() % 25) {
        throw new Error();
    }
    
    return true;
}, false);

console.log(`Date % 25 was ${modulo ? true : false}`);
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