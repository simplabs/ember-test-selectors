'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /data-test-.*/;

function StripDataTestPropertiesPlugin(babel) {
  return new babel.Plugin('ember-test-selectors', {
    visitor: {
      Property(node) {
        if (TEST_SELECTOR_PREFIX.test(node.key.value)) {
          this.dangerouslyRemove();
        }
      },
    },
  });
}

StripDataTestPropertiesPlugin.baseDir = function() {
  return __dirname;
};

StripDataTestPropertiesPlugin.cacheKey = function() {
  return 'ember-test-selectors.strip-data-test-properties';
};

module.exports = StripDataTestPropertiesPlugin;
