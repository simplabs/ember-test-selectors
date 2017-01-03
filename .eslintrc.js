module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: 'eslint:recommended',
  rules: {
    // --- Possible Errors ---

    'no-template-curly-in-string': 'error',
    'no-unsafe-negation': 'error',

    // --- Best Practices ---

    'curly': 'error',
    'eqeqeq': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-multi-spaces': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'require-await': 'error',
    'yoda': 'error',

    // --- Variables ---

    'no-use-before-define': ['error', 'nofunc']
  }
};
