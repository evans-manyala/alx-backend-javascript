/**
 * Function Calculates the sum of two rounded off numbers
 * @param {number} a - The first number to be rounded off.
 * @param {number} b - The second number to be rounded off.
 * @returns {number} The sum of a and b, with both numbers rounded off to the
 * nearest integer
 */
function calculateNumber(a, b) {
    return Math.round(a) + Math.round(b);
  }
  
  module.exports = calculateNumber;
