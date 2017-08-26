import Ember from 'ember';

const { isNone, deprecate } = Ember;

const message = `Using the "testSelector" helper function is deprecated as it obfuscates the selectors, making the tests harder to understand.
Please use the actual attribute selectors instead, e.g. "[data-test-my-element]" instead of "testSelector('my-element')".`;

export default function testSelector(key, value) {
  deprecate(message, false, {
    id: 'ember-test-selectors.test-selector-helper',
    until: '0.4.0',
    url: 'https://github.com/simplabs/ember-test-selectors#deprecations',
  });

  return isNone(value) ? `[data-test-${key}]` : `[data-test-${key}="${value}"]`;
}
