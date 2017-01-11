var fs = require('fs');
var assert = require('assert');

var babel = require('babel-core');
var StripDataTestPropertiesPlugin = require('../strip-data-test-properties-plugin');

function testFixture(name) {
  it('fixture: ' + name, function() {
    var fixturePath = __dirname + '/fixtures/' + name + '/fixture.js';
    var expectedPath = __dirname + '/fixtures/' + name + '/expected.js';

    var expected = fs.readFileSync(expectedPath).toString();
    var result = babel.transformFileSync(fixturePath, {
      plugins: [StripDataTestPropertiesPlugin],
    });

    assert.strictEqual(result.code.trim(), expected.trim());
  });
}

describe('StripDataTestProperties plugin', function() {
  testFixture('default');
});

