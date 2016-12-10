var assert = require('assert');
var React = require('react');

var Widget = require('./Widget.jsx');

describe('Widget', () => {
	it('is a function', () => {
		assert.strictEqual(typeof Widget, 'function');
	});
});