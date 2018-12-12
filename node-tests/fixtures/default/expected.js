'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

exports['default'] = _ember2['default'].Component.extend({
  foo: 'foo',
  'data-test': 'test',
  'metadata-test-foo': 'metadata'
});
var c2 = _ember2['default'].Component.extend({
  foo: 'foo'
});
exports.c2 = c2;
