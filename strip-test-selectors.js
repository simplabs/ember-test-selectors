'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /data-test-.*/;

function isNotTestSelector(attribute) {
  return !TEST_SELECTOR_PREFIX.test(attribute);
}

function StripTestSelectorsTransform() {
  this.syntax = null;
}

StripTestSelectorsTransform.prototype.transform = function(ast) {
  let walker = new this.syntax.Walker();

  walker.visit(ast, function(node) {
    if (node.type === 'ElementNode') {
      node.attributes = node.attributes.filter(function(attribute) {
        return isNotTestSelector(attribute.name);
      });
    } else if (node.type === 'MustacheStatement' || node.type === 'BlockStatement') {
      node.params = node.params.filter(function(param) {
        return isNotTestSelector(param.original);
      });

      node.hash.pairs = node.hash.pairs.filter(function(pair) {
        return isNotTestSelector(pair.key);
      });
    }
  });

  return ast;
};

module.exports = StripTestSelectorsTransform;
