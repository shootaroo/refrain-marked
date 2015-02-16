/* global it */
'use strict';
var assert = require('power-assert');
var refrain = require('refrain');

var target = require('../index');

it('normal', function () {
  target.call(refrain({}), '#foo\n##bar\nbuz', {}, function (err, output) {
    assert(output === '<h1 id="foo">foo</h1>\n<h2 id="bar">bar</h2>\n<p>buz</p>\n');
  });
});
