const { describe, it } = require('mocha')
const { expect } = require('chai')
const Catcher = require('../../../lib/helper/catcher')

describe('Catcher', () => {
  describe('Try', () => {
    describe('Resolve', () => {
      it('should return a correct value', () => {
        expect(Catcher.resolve(() => 'Hello')).to.be.equal('Hello')
      })
    })

    describe('Value', () => {
      it('should return undefined as default value', () => {
        expect(Catcher.resolve(() => {
          throw new Error()
        })).to.be.equal(undefined)
      })

      it('should return the default value', () => {
        expect(Catcher.resolve(() => {
          throw new Error()
        }, 'hello')).to.be.equal('hello')
      })
    })
  })

  describe('Reject', () => {
    describe('Success', () => {
      it('should throws an instance of Error', () => {
        expect((() => Catcher.reject(new Error()))).to.throw(Error)
      })
    })
    describe('Success', () => {
      it('should throws an instance of TypeError', () => {
        expect((() => Catcher.reject(new TypeError()))).to.throw(TypeError)
      })
    })
  })
})
