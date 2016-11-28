import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  'data-test-predefined-attribute': computed(function() {
    return 'test-value';
  })
});
