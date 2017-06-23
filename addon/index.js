import Ember from 'ember';

const { isNone, warn } = Ember;

export default function testSelector(key, value) {
  return isNone(value) ? `[data-test-${key}]` : `[data-test-${key}="${value}"]`;
}

export function ts(literals, ...substitutions) {
  let interpolated = literals[0] + substitutions.map((_, i) => substitutions[i] + literals[i + 1]).join('');
  if (interpolated.indexOf('%') === -1) {
    warn(`[ember-test-selectors] "${interpolated}" contains no test selectors. Please use the % prefix for test selectors (e.g. ts\`%foo\`).`, false, {
      id: 'ember-test-selectors.missing-test-selector-prefix',
    });
    return interpolated;
  }

  return interpolated
    .replace(/%([\w-_]+)="([^"]*)"/g, (match, name, value) => `[data-test-${name}="${value}"]`)
    .replace(/%([\w-_]+)='([^']*)'/g, (match, name, value) => `[data-test-${name}="${value}"]`)
    .replace(/%([\w-_]+)=([^\s]+)/g, (match, name, value) => `[data-test-${name}="${value}"]`)
    .replace(/%([\w-_]+)/g, (match, name) => `[data-test-${name}]`);
}
