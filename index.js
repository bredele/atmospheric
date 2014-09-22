
/**
 * Atmospheric pressure.
 *
 * @param {m} altitude
 * @return {hPa}
 * @api public
 */

module.exports = function(altitude) {
  return 1013.25 * Math.pow((1 - 0.0065 * altitude / 288.15), 5.255);
};


