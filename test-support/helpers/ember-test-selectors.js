import Ember from 'ember';

const {
  isNone
} = Ember;

export default function testSelector(key, value) {
  return isNone(value) ? `[data-test-${key}]` : `[data-test-${key}="${value}"]`;
}
