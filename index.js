/* eslint-env node */
'use strict';

module.exports = {
  name: 'test-selectors',

  _assignOptions: function(app) {
    var appOptions = app.options || {};
    var addonOptions = appOptions['ember-test-selectors'] || {};
    var environments = addonOptions.environments || ['production'];

    this._stripTestSelectors = (environments.indexOf(app.env) !== -1);
  },

  setupPreprocessorRegistry: function(type, registry) {
    if (type === 'parent') {
      this._assignOptions(registry.app);

      if (this._stripTestSelectors) {
        var StripTestSelectorsTransform = require('./strip-test-selectors');

        registry.add('htmlbars-ast-plugin', {
          name: 'strip-test-selectors',
          plugin: StripTestSelectorsTransform,
          baseDir: function() { return __dirname; }
        });
      }
    }
  }
};
