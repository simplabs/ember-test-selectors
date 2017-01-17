/* global Ember */

(function() {
  var bindDataTestAttributes;

  Ember.Component.reopen({
    init: function() {
      this._super.apply(this, arguments);
      if (!bindDataTestAttributes) {
        bindDataTestAttributes = require('ember-test-selectors/utils/bind-data-test-attributes')['default'];
      }
      bindDataTestAttributes(this);
    }
  });
})();
