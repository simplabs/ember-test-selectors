import Ember from 'ember';
import bindDataTestAttributes from '../utils/bind-data-test-attributes';

function initialize(/* application */) {
  Ember.Component.reopen({
    init() {
      this._super(...arguments);
      bindDataTestAttributes(this);
    }
  });
}

export default {
  name: 'ember-test-selectors',
  initialize
};
