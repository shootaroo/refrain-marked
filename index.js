'use strict';
var marked = require('marked');
var assign = require('fast.js').assign;

module.exports = function (text, content, callback) {
  marked(text, assign(content, this.options.marked || {}), callback);
};
