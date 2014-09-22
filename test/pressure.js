
/**
 * Test dependencies.
 */

var assert = require('assert');
var round = require('round');
var pressure = require('..');

describe("atmospheric pressure", function() {
	it("0 m", function() {
		assert.equal(round(pressure(0), 2), 1013.25);
	});
	it("500 m", function() {
		assert.equal(round(pressure(500), 2), 954.62);
	});
	it("1000 m", function() {
		assert.equal(round(pressure(1000), 2), 898.76);
	});
	it("5000 m", function() {
		assert.equal(round(pressure(5000), 2), 540.26);
	});
});
