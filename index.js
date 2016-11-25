/* jshint node:true */
'use strict';

var _includes = require('lodash/includes');

module.exports = {
  name: 'test-selectors',

  setupPreprocessorRegistry: function(type, registry) {
    var appOptions = registry.app.options || {};
    var addonOptions = appOptions['ember-test-selectors'] || {};
    var environments = addonOptions.environments || ['production'];

    if (_includes(environments, registry.app.env)) {
      var StripTestSelectorsTransform = require('./strip-test-selectors');

      registry.add('htmlbars-ast-plugin', {
        name: 'strip-test-selectors',
        plugin: StripTestSelectorsTransform,
        baseDir: function() { return __dirname; }
      });
    }
  }
};
