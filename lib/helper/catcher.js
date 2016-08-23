/**
 * Copyright 2016 Jean Desravines <hi@jeandesravines.com>
 */

'use strict';

class Catcher {
	/**
	 * Execute the function surrounded with try/catch block and return its result.
	 * If the function throw an error, the default value will be returned
	 * @param {function} fn the function to execute between try/catch block
	 * @param {*} [defaults] the default value
	 * @returns {*} the value returned by fn or the default value if it fails
	 */
	static resolve(fn, defaults = undefined) {
		let result = defaults;

		try {
			result = fn();
		} catch (error) {
			// noop
		}

		return result;
	}

	/**
	 * Throws the Error error
	 * @param {Error} error the Error to throw
	 */
	static reject(error = new Error()) {
		throw error;
	}
}


////////////////////////////////////////////
////////////////////////////////////////////

module.exports = Catcher;