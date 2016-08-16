/**
 * Copyright 2016 Jean Desravines <hi@jeandesravines.com>
 */

'use strict';

const {describe, it} = require('mocha');
const {expect, should} = require('chai');
const catcher = require('../../../lib/helper/catcher');

describe('Catcher', () => {
	describe('Success', () => {
		it('should return a correct value', () => {
			expect(catcher(() => 'Hello')).to.be.equal('Hello');
		});
	});
	
	describe('Error', () => {
		it('should return undefined as default value', () => {
			expect(catcher(() => {
				throw new Error();
			})).to.be.equal(undefined);
		});

		it('should return an array as default value', () => {
			expect(catcher(() => {
				throw new Error();
			}, [])).to.be.equal([]);
		});
	});
});
