'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': {
      'allow': ['@data-test-first', '@data-test-second', '@data-non-test', '@data-test']
    }
  }
};
