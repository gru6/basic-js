const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  for (let el of members) {
    if (typeof el === 'string') {
      el = el.toUpperCase().trim().split('');
      arr.push(el[0]);
    } else continue;
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
