/**
 * Class representing an error catcher
 * @class
 */
class Catcher {
  /**
   * Execute the function surrounded with try/catch block and return its result.
   * If the function throw an error, the default value will be returned
   * @param {function} fn the function to execute between try/catch block
   * @param {*} [defaults] the default value
   * @return {*} the value returned by fn or the default value if it fails
   */
  static resolve(fn, defaults = undefined) {
    try {
      return fn()
    } catch (error) {
      // noop
    }

    return defaults
  }

  /**
   * Throws the Error error
   * @param {Error} [error] the Error to throw
   */
  static reject(error) {
    throw new (error.constructor || Error)(error)
  }
}


module.exports = Catcher
