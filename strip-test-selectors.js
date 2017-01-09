/* eslint-env node */
var TEST_SELECTOR_PREFIX = /data-test-.*/;

function StripTestSelectorsTransform() {
  this.syntax = null;
}

StripTestSelectorsTransform.prototype.transform = function(ast) {
  var walker = new this.syntax.Walker();

  walker.visit(ast, function(node) {
    if (node.type === 'ElementNode') {
      node.attributes = node.attributes.filter(function(attribute) {
        return !TEST_SELECTOR_PREFIX.test(attribute.name);
      });
    } else if (node.type === 'MustacheStatement' || node.type === 'BlockStatement') {
      node.hash.pairs = node.hash.pairs.filter(function(pair) {
        return !TEST_SELECTOR_PREFIX.test(pair.key);
      });
    }
  });

  return ast;
};

module.exports = StripTestSelectorsTransform;
