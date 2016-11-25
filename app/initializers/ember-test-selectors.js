import addTestSelectorsToComponents from 'ember-test-selectors/initializers/add-test-selectors-to-components';
import config from '../config/environment';

export default {
  name:       'ember-test-selectors',
  initialize: function() {
    addTestSelectorsToComponents(config);
  }
};
