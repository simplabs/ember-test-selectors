/*jshint node:true*/
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
    }
  });

  return ast;
};

module.exports = StripTestSelectorsTransform;
