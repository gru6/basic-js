const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrnum = n.toString().split('');
  let max = 0;
  for (let i = 0; i < arrnum.length; i++) {
    const arr = [...arrnum]; //clone array numbers
    arr.splice(i, 1);
    if (+arr.join('') > max) {
      max = +arr.join('');
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
