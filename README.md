# Catcher

[![Build Status](https://travis-ci.org/jeandesravines/catcher.svg)](https://travis-ci.org/jeandesravines/catcher)
[![codecov](https://codecov.io/gh/jeandesravines/catcher/branch/master/graph/badge.svg)](https://codecov.io/gh/jeandesravines/catcher)

Functional errors interceptions

## Table of contents

* [Setup](#setup)
* [Usage](#usage)
* [Examples](#examples)
 

## Setup

This module can then be installed with yarn:
```shell
yarn add @jdes/catcher
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
const util = require('util');
const Catcher = require('@jdes/catcher');

// Call fs.accessSync which throws an error with unknown path
const filename = './unknown';
const exists = Catcher.resolve(() => fs.accessSync(filename)) ? true : false;
const promisify = util.promisify;

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
  if (name.toLowerCase() !== 'jimmmy') {
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