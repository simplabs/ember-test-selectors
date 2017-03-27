'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /data-test-.*/;

function StripDataTestPropertiesPlugin() {
  return {
    visitor: {
      Property(path) {
        if (TEST_SELECTOR_PREFIX.test(path.node.key.value)) {
          path.remove();
        }
      },
    },
  };
}

StripDataTestPropertiesPlugin.baseDir = function() {
  return __dirname;
};

StripDataTestPropertiesPlugin.cacheKey = function() {
  return 'ember-test-selectors.strip-data-test-properties';
};

module.exports = StripDataTestPropertiesPlugin;
