'use strict';
var assert = require('assert'),
		fs = require('fs'),
		path = require('path'),
		broccoli = require('broccoli'),
		rucksack = require('../');

describe('broccoli-rucksack', function() {

	it('processes css with Rucksack', function () {
		return (new broccoli.Builder(rucksack(path.join(__dirname, 'fixture')))).build().then(function (dir) {
			var css = fs.readFileSync(path.join(dir.directory, 'fixture.css'), 'utf8');
			assert.strictEqual(css.trim(), 'a{position: absolute;top: 0;right: 0;bottom: 0;left: 0;}');
		});
	});

});
