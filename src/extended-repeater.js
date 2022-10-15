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


function repeater(str, options) {

  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.hasOwnProperty('addition')) options.addition = '';
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  str = String(str);
  options.addition = String(options.addition);
  const additionStr = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  const subStr = str + additionStr;
  return new Array(options.repeatTimes).fill(subStr).join(options.separator);
}



module.exports = {
  repeater
};
