var EOL = require('os').EOL;

module.exports = {
  description: 'Generates ember-test-selectors test helper',

  afterInstall: function() {
    var TEST_HELPER_PATH = 'tests/test-helper.js';
    var IMPORT_STATEMENT = EOL + "import './helpers/test-selectors';";
    var INSERT_AFTER = "import resolver from './helpers/resolver';";

    return this.insertIntoFile(TEST_HELPER_PATH, IMPORT_STATEMENT, {
      after: INSERT_AFTER
    });
  },

  normalizeEntityName: function() {}
};
