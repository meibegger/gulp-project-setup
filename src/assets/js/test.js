/**
 * @version v0
 * @author Mandana Eibegger <ak@schoener.at>
 */

/**
 * This is a simple class to test the JS and JSDoc setup
 *
 * @exmple <caption>Usage</caption>
 * import 'test';
 * new Test('World')
 *
 * ... will output `Hello World ;)` in the console
 */
class Test {
  /**
   *
   * @param {string} recipient
   *        The name of the recipient
   */
  constructor(recipient) {
    console.log(`Hello ${recipient} ;)`);
  }
}

export default Test;
