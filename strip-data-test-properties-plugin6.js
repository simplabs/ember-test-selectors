'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /^data-test-.*/;
let SUPPORTS_DATA_TEST_PROP = 'supportsDataTestProperties';

function StripDataTestPropertiesPlugin() {
  return {
    visitor: {
      Property(path) {
        let nodeName = path.node.key.name || path.node.key.value;
        if (TEST_SELECTOR_PREFIX.test(nodeName) || nodeName === SUPPORTS_DATA_TEST_PROP) {
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
