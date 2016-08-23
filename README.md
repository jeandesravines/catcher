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
const Catcher = require('@jdes/catcher');
```

## API

### Methods

#### resolve(fn: function: * [, defaults: * = undefined]): *

* `fn`: The function to execute and which can throws an Error.
* `direction`: The defaults value to return if `fn` fails

Execute the function `fn` surrounding with try/catch block. 
If all is ok, `catcher` returns the value returned by `fn`.


#### reject(error: Error = new Error())

* `error`: The error to throw

Throws the error give in arguments.


## Examples

### Resolves with "fs" package

```javascript
const fs = require('fs');
const promisify = require('@jdes/promisify');
const Catcher = require('@jdes/catcher');

// Call fs.accessSync which throws an error with unknown path
const filename = './unknown';
const exists = Catcher.resolve(() => fs.accessSync(filename)) ? true : false;

if (exists) {
    promisify(fs.readFile)(filename)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}
```

### Resolve with default value

```javascript
const Catcher = require('@jdes/catcher');

// Check if the argument is equal to "jimmy" (after transform it to lower case).
// If it is not, it throws an Error.
// The Error is catched by the catcher and returns the default value : false
const isJimmy = (name) => {
    if (name.toLower() !== 'jimmmy') {
        throw new Error();
    }
    
    return true;
};

if (Catcher.resolve(() => isJimmy('Toto'), false)) {
    console.log('Hello Jimmy');
} else {
    console.error('Who are you?');
}
```

### Reject functionally

```javascript
const Catcher = require('@jdes/catcher');

// Returns true if name equals "jimmy" or throws an Error
const isJimmy = (name) => {
	return name.toLowerCase() === 'jimmy' || Catcher.reject(new Error());
};

try {
    if (isJimmy('Toto')) {
    	console.log('Hello Jimmy');
    }
} catch (error) {
	console.error('Who are you?');
}
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