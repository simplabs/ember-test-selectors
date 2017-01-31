'use strict';

/* eslint-env node */

let EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let stripTestSelectors = process.env['STRIP_TEST_SELECTORS'];

  let app = new EmberAddon(defaults, {
    'ember-test-selectors': {
      strip: Boolean(stripTestSelectors)
    }
  });

  return app.toTree();
};
