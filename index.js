'use strict';

/* eslint-env node */

const VersionChecker = require('ember-cli-version-checker');
const cacheKeyForTree = require('calculate-cache-key-for-tree');

module.exports = {
  name: require('./package').name,

  _assignOptions(app) {
    let ui = app.project.ui;

    let appOptions = app.options || {};
    let addonOptions = appOptions['ember-test-selectors'] || {};

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

  _setupPreprocessorRegistry(registry) {
    let pluginFnName = this._stripTestSelectors ? '_buildStripPlugin' : '_buildHashParamPlugin';

    let plugin = this[pluginFnName]();
    plugin.parallelBabel = {
      requireFile: __filename,
      buildUsing: pluginFnName,
      params: {},
    };

    registry.add('htmlbars-ast-plugin', plugin);
  },

  included(appOrParent) {
    this._super.included.apply(this, arguments);

    let host = this._findHost();
    this._assignOptions(host);

    // we can't use the setupPreprocessorRegistry() hook as it is called too
    // early and we do not have reliable access to `app.tests` there yet
    this._setupPreprocessorRegistry(appOrParent.registry);

    // add the StripDataTestPropertiesPlugin to the list of plugins used by
    // the `ember-cli-babel` addon
    if (this._stripTestSelectors && !this._registeredWithBabel) {
      let checker = new VersionChecker(this.parent).for('ember-cli-babel', 'npm');

      appOrParent.options = appOrParent.options || {};

      if (checker.satisfies('^5.0.0')) {
        appOrParent.options.babel = appOrParent.options.babel || {};
        appOrParent.options.babel.plugins = appOrParent.options.babel.plugins || [];
        appOrParent.options.babel.plugins.push(require('./strip-data-test-properties-plugin'));
      } else if (checker.satisfies('^6.0.0-beta.1') || checker.satisfies('^7.0.0')) {
        appOrParent.options.babel6 = appOrParent.options.babel6 || {};
        appOrParent.options.babel6.plugins = appOrParent.options.babel6.plugins || [];
        appOrParent.options.babel6.plugins.push(require.resolve('./strip-data-test-properties-plugin6'));
      } else {
        this.ui.writeWarnLine('ember-test-selectors: You are using an unsupported ember-cli-babel version. data-test ' +
          'properties are not automatically stripped from your JS code.');
      }

      this._registeredWithBabel = true;
    }

    if (!this._stripTestSelectors) {
      host.import('vendor/ember-test-selectors/patch-component.js');
    }
  },

  cacheKeyForTree(treeType) {
    // ensure our treeForAddon is memoized
    if (treeType === 'addon') {
      return cacheKeyForTree('addon', this, [this._stripTestSelectors]);
    } else {
      return cacheKeyForTree(treeType, this);
    }
  },

  treeForAddon() {
    // remove our "addon" folder from the build if we're stripping test selectors
    if (!this._stripTestSelectors) {
      return this._super.treeForAddon.apply(this, arguments);
    }
  },

  preprocessTree(type, tree) {
    // remove the unit tests if we're testing ourself and are in strip mode.
    // we do this because these tests depend on the "addon" and "app" folders being available,
    // which is not the case if they are stripped out of the build.
    if (type === 'test' && this._stripTestSelectors && this.project.name() === 'ember-test-selectors') {
      // eslint-disable-next-line node/no-unpublished-require -- This is only invoked during tests.
      tree = require('broccoli-stew').rm(tree, 'dummy/tests/unit/**/*.js');
    }
    return tree;
  },

  _buildStripPlugin() {
    let StripTestSelectorsTransform = require('./strip-test-selectors');

    return {
      name: 'strip-test-selectors',
      plugin: StripTestSelectorsTransform,
      baseDir() { return __dirname; },
      cacheKey() { return 'strip-test-selectors'; },
    };
  },

  _buildHashParamPlugin() {
    let TransformTestSelectorParamsToHashPairs = require('./transform-test-selector-params-to-hash-pairs');

    return {
      name: 'transform-test-selector-params-to-hash-pairs',
      plugin: TransformTestSelectorParamsToHashPairs,
      baseDir() { return __dirname; },
      cacheKey() { return 'transform-test-selector-params-to-hash-pairs'; },
    };
  },
};
