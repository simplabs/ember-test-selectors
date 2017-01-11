/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-test-selectors',

  _assignOptions: function(app) {
    var ui = app.project.ui;

    var appOptions = app.options || {};
    var addonOptions = appOptions['ember-test-selectors'] || {};

    if (addonOptions.environments) {
      ui.writeDeprecateLine('The "environments" option in "ember-test-selectors" has been replaced ' +
        'with the "strip" option. Use e.g. "strip: EmberApp.env() === \'production\'" instead to ' +
        'recreate the old behavior.', false);

      this._stripTestSelectors = (addonOptions.environments.indexOf(app.env) !== -1);
    } else if ('strip' in addonOptions) {
      this._stripTestSelectors = addonOptions.strip;
    } else {
      this._stripTestSelectors = !app.tests;
    }
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
  },

  treeForAddon: function() {
    // remove our "addon" folder from the build if we're stripping test selectors
    if (!this._stripTestSelectors) {
      return this._super.treeForAddon.apply(this, arguments);
    }
  },

  treeForApp: function() {
    // remove our "app" folder from the build if we're stripping test selectors
    if (!this._stripTestSelectors) {
      return this._super.treeForApp.apply(this, arguments);
    }
  },

  preprocessTree: function(type, tree) {
    // remove the unit tests if we're testing ourself and are in strip mode.
    // we do this because these tests depend on the "addon" and "app" folders being available,
    // which is not the case if they are stripped out of the build.
    if (type === 'test' && this._stripTestSelectors && this.project.name() === 'ember-test-selectors') {
      tree = require('broccoli-stew').rm(tree, 'dummy/tests/unit/**/*.js');
    }
    return tree;
  },
};
