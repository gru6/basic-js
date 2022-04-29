const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == "") return 'Unable to determine the time of year!'
  else {
    if (date.prototype.toString.call(d) === "[object Date]") {
      if (isNaN(d.getTime())) { return "Invalid date!" }
      else {
        if (date.getMonth() == 11, 0, 1) return "winter";
        if (date.getMonth() == 2, 3, 4) return "spring";
        if (date.getMonth() == 5, 6, 7) return "summer";
        if (date.getMonth() == 8, 9, 10) return "autumn (fall)";
      }


    }

  }

  module.exports = {
    getSeason
  };
