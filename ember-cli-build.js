/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var stripTestSelectors = process.env['STRIP_TEST_SELECTORS'];
  var environments = stripTestSelectors ? ['test'] : ['production'];

  var app = new EmberAddon(defaults, {
    'ember-test-selectors': {
      environments: environments
    }
  });

  return app.toTree();
};
