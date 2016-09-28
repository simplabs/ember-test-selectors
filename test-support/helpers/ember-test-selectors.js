import Ember from 'ember';

const {
  isNone
} = Ember;

export default function testSelector(key, value) {
  let selector;
  if (!isNone(value)) {
    selector = `[data-test-${key}="${value}"]`;
  } else {
    selector = `[data-test-${key}]`;
  }
  return selector;
};
