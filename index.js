'use strict';

var Filter = require('broccoli-filter'),
		rucksack = require('rucksack-css');

function RucksackFilter(inputNode, options) {
	if (!(this instanceof RucksackFilter)) {
		return new RucksackFilter(inputNode, options);
	}

	Filter.call(this, inputNode);
	this.options = options || {};
}

RucksackFilter.prototype = Object.create(Filter.prototype);
RucksackFilter.prototype.constructor = RucksackFilter;

RucksackFilter.prototype.extensions = ['css'];
RucksackFilter.prototype.targetExtension = 'css';

RucksackFilter.prototype.processString = function(str) {
	return rucksack.process(str, this.options);
};

module.exports = RucksackFilter;
