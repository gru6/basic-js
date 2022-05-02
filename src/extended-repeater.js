const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

let options = {
  repeatTimes: 3,
  separator: "**",
  addition: "PLUS",
  additionRepeatTimes: 3,
  additionSeparator: "00"
};
let str = "STRING"
function repeater(str, options) {


  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }


  /* options.repeatTimes ... */
}
/* console.log(repeater()); */

module.exports = {
  repeater
};
