import Ember from 'ember';
import bindDataTestAttributes from '../utils/bind-data-test-attributes';

function initialize(/* application */) {
  Ember.Component.reopen({
    init() {
      bindDataTestAttributes(this);
      this._super(...arguments);
    }
  });
}

export default {
  name: 'ember-test-selectors',
  initialize
};
