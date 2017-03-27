var fs = require('fs');
var assert = require('assert');
var multidepRequire = require('multidep')('node-tests/multidep.json');

var babel5 = multidepRequire('babel-core', '5.8.33');
var StripDataTestPropertiesPlugin5 = require('../strip-data-test-properties-plugin');

function testFixture(name) {
  it('fixture: ' + name, function() {
    var fixturePath = __dirname + '/fixtures/' + name + '/fixture.js';
    var expectedPath = __dirname + '/fixtures/' + name + '/expected.js';

    var expected = fs.readFileSync(expectedPath).toString();
    var result = babel5.transformFileSync(fixturePath, {
      plugins: [StripDataTestPropertiesPlugin5],
    });

    assert.strictEqual(result.code.trim(), expected.trim());
  });
}

describe('StripDataTestProperties plugin', function() {
  testFixture('default');
});

