/* eslint-env node */
'use strict';

module.exports = {
  name: 'test-selectors',

  setupPreprocessorRegistry: function(type, registry) {
    var appOptions = registry.app.options || {};
    var addonOptions = appOptions['ember-test-selectors'] || {};
    var environments = addonOptions.environments || ['production'];

    if (environments.indexOf(registry.app.env) !== -1) {
      var StripTestSelectorsTransform = require('./strip-test-selectors');

      registry.add('htmlbars-ast-plugin', {
        name: 'strip-test-selectors',
        plugin: StripTestSelectorsTransform,
        baseDir: function() { return __dirname; }
      });
    }
  }
};
