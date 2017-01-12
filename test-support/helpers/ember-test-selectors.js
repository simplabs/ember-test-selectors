import Ember from 'ember';
import testSelector from 'ember-test-selectors';

let message = 'Importing testSelector() from "<appname>/tests/helpers/ember-test-selectors" is deprecated. ' +
  'Please import testSelector() from "ember-test-selectors" instead.';

Ember.deprecate(message, false, {
  id: 'ember-test-selectors.test-selector-import',
  until: '0.2.0',
  url: 'https://github.com/simplabs/ember-test-selectors#usage',
});

export default testSelector;
