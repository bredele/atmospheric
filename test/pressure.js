
/**
 * Test dependencies.
 */

var assert = require('assert');
var pressure = require('..');

describe("atmospheric pressure", function() {
	it("0 m", function() {
		assert.equal(pressure(0).toFixed(2), 1013.25);
	});
	it("500 m", function() {
		assert.equal(pressure(500).toFixed(2), 954.62);
	});
	it("1000 m", function() {
		assert.equal(pressure(1000).toFixed(2), 898.76);
	});
	it("5000 m", function() {
		assert.equal(pressure(5000).toFixed(2), 540.26);
	});
});
