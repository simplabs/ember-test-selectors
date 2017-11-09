import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import config from 'dummy/config/environment';
import { hasReliablePositionalParams } from 'dummy/version-checks';

moduleForComponent('print-test-attributes', 'StripTestSelectorsTransform plugin', {
  integration: true
});

if (config.stripTestSelectors) {

  (hasReliablePositionalParams ? test : skip)('it strips data-test-* attributes from components with single positional params', function(assert) {
    this.render(hbs`{{print-test-attributes data-test-should-not-be}}`);

    assert.equal(this.$('.data-test-positional-params').text(), 0, 'there should be no params');
  });

  (hasReliablePositionalParams ? test : skip)('it strips data-test-* attributes from components with positional params data-test-* as first param', function(assert) {
    this.render(hbs`{{print-test-attributes data-test-should-not-be "param1"}}`);

    assert.equal(this.$('.data-test-positional-params').text(), 1, 'there should be only one param');
  });

  (hasReliablePositionalParams ? test : skip)('it strips data-test-* attributes from components with multiple positional params', function(assert) {
    this.render(hbs`{{print-test-attributes "param1" data-test-should-not-be}}`);

    assert.equal(this.$('.data-test-positional-params').text(), 1, 'there should be only one param');
  });

  (hasReliablePositionalParams ? test : skip)('it strips data-test-* attributes from components with block and multiple positional params', function(assert) {
    this.render(hbs`{{#print-test-attributes "param1" data-test-should-not-be}}{{/print-test-attributes}}`);

    assert.equal(this.$('.data-test-positional-params').text(), 1, 'there should be only one param');
  });

  test('it strips data-test-* attributes from components', function(assert) {
    this.render(hbs`{{print-test-attributes data-test-first="foobar"}}`);

    assert.equal(this.$('.data-test-first').text(), '', 'the data-test-first was stripped');
  });

  test('it strips data-test-* attributes from components in block form', function(assert) {
    this.render(hbs`{{#print-test-attributes data-test-first="foobar"}}hello{{/print-test-attributes}}`);

    assert.equal(this.$('.data-test-first').text(), '', 'the data-test-first was stripped');
  });

  test('it works with multiple data-test-* attributes on components', function(assert) {
    this.render(hbs`{{print-test-attributes data-test-first="foobar" data-test-second="second"}}`);

    assert.equal(this.$('.data-test-first').text(), '', 'the data-test-first was stripped');
    assert.equal(this.$('.data-test-second').text(), '', 'the data-test-second attribute was stripped');
  });

  test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on components', function(assert) {
    this.render(hbs`{{print-test-attributes data-test-first="foobar" data-non-test="baz"}}`);

    assert.equal(this.$('.data-test-first').text(), '', 'the data-test-first was stripped');
    assert.equal(this.$('.data-non-test').text(), 'baz', 'the data-non-test attribute was not stripped');
  });

  test('it leaves data-test attributes untouched on components', function(assert) {
    this.render(hbs`{{print-test-attributes data-test="foo"}}`);

    assert.equal(this.$('.data-test').text(), 'foo', 'the data-test attribute was stripped');
  });

  test('it leaves other data attributes untouched on components', function(assert) {
    this.render(hbs`{{print-test-attributes data-non-test="foo"}}`);

    assert.equal(this.$('.data-non-test').text(), 'foo', 'the data-non-test attribute was not stripped');
  });

} else {

  test('it does not strip data-test-* attributes from components', function(assert) {
    this.render(hbs`{{print-test-attributes data-test-first="foobar"}}`);

    assert.equal(this.$('.data-test-first').text(), 'foobar', 'the data-test-first attribute was not stripped');
  });

}
