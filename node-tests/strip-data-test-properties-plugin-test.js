var fs = require('fs');
var assert = require('assert');
var multidepRequire = require('multidep')('node-tests/multidep.json');

var babel5 = multidepRequire('babel-core', '5.8.33');
var babel6 = multidepRequire('babel-core', '6.24.0');

var StripDataTestPropertiesPlugin5 = require('../strip-data-test-properties-plugin');
var StripDataTestPropertiesPlugin6 = require('../strip-data-test-properties-plugin6');

function testFixture(name) {
  it('Babel5: fixture: ' + name, function() {
    var fixturePath = __dirname + '/fixtures/' + name + '/fixture.js';
    var expectedPath = __dirname + '/fixtures/' + name + '/expected.js';

    var expected = fs.readFileSync(expectedPath).toString();
    var result = babel5.transformFileSync(fixturePath, {
      plugins: [StripDataTestPropertiesPlugin5],
    });

    assert.strictEqual(result.code.trim(), expected.trim());
  });

  it('Babel6: fixture: ' + name, function() {
    var fixturePath = __dirname + '/fixtures/' + name + '/fixture.js';
    var expectedPath = __dirname + '/fixtures/' + name + '/expected6.js';

    var expected = fs.readFileSync(expectedPath).toString();

    var result = babel6.transformFileSync(fixturePath, {
      plugins: [StripDataTestPropertiesPlugin6],
    });

    assert.strictEqual(result.code.trim(), expected.trim());
  });
}

describe('StripDataTestProperties plugin', function() {
  testFixture('default');
});

