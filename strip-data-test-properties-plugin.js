'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /^data-test-.*/;
let SUPPORTS_DATA_TEST_PROP = 'supportsDataTestProperties';

function StripDataTestPropertiesPlugin(babel) {
  return new babel.Plugin('ember-test-selectors', {
    visitor: {
      Property(node) {
        let nodeName = node.key.name || node.key.value;
        if (TEST_SELECTOR_PREFIX.test(nodeName) || nodeName === SUPPORTS_DATA_TEST_PROP) {
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
