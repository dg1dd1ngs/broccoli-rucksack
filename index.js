'use strict';

var Filter = require('broccoli-filter'),
		rucksack = require('rucksack-css');

function RucksackFilter(inputTree, options) {
	if (!(this instanceof RucksackFilter)) {
		return new RucksackFilter(inputTree, options);
	}

	this.inputTree = inputTree;
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
