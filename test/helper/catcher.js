/**
 * Copyright 2016 Jean Desravines <hi@jeandesravines.com>
 */

'use strict';

const {describe, it} = require('mocha');
const {expect, should} = require('chai');
const Catcher = require('../../lib/helper/catcher');

describe('Catcher', () => {
	describe('Try', () => {
		describe('Success', () => {
			it('should return a correct value', () => {
				expect(Catcher.resolve(() => 'Hello')).to.be.equal('Hello');
			});
		});

		describe('Error', () => {
			it('should return undefined as default value', () => {
				expect(Catcher.resolve(() => {
					throw new Error();
				})).to.be.equal(undefined);
			});

			it('should return the default value', () => {
				expect(Catcher.resolve(() => {
					throw new Error();
				}, 'hello')).to.be.equal('hello');
			});
		});
	});
	
	describe('Catch', () => {
		describe('Success', () => {
			it('should throws an error', () => {
				expect((() => Catcher.reject(new Error()))).to.throw(Error);
			});
		});
	});
});