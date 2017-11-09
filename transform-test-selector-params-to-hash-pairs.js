'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /data-test-.*/;

function TransformTestSelectorParamsToHashPairs() {
  this.syntax = null;
}

function isTestSelectorParam(param) {
  return param.type === 'PathExpression'
    && TEST_SELECTOR_PREFIX.test(param.original);
}

TransformTestSelectorParamsToHashPairs.prototype.transform = function(ast) {
  let b = this.syntax.builders;
  let walker = new this.syntax.Walker();

  walker.visit(ast, function(node) {
    if (node.type === 'MustacheStatement' || node.type === 'BlockStatement') {
      if ('sexpr' in node) {
        node = node.sexpr;
      }

      let testSelectorParams = [];
      let otherParams = [];

      node.params.forEach(function(param) {
        if (isTestSelectorParam(param)) {
          testSelectorParams.push(param);
        } else {
          otherParams.push(param);
        }
      });

      node.params = otherParams;

      testSelectorParams.forEach(function(param) {
        let pair = b.pair(param.original, b.boolean(true));
        node.hash.pairs.push(pair);
      });
    }
  });

  return ast;
};

module.exports = TransformTestSelectorParamsToHashPairs;
