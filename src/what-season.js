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
    var arrD = date.split(".");
    arrD[1] -= 1;
    var d = new Date(arrD[2], arrD[1], arrD[0]);
    if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
      if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) return "winter";
      if (date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4) return "spring";
      if (date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7) return "summer";
      if (date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10) return "autumn (fall)";
    } else {
      return false;
    }

    /* if (date.prototype.toString.call(d) === "[object Date]") {
      if (isNaN(d.getTime())) { return "Invalid date!" } */
    /*     else {
       
     } */


  }

}

module.exports = {
  getSeason
};
