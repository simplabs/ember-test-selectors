import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

import config from 'dummy/config/environment';

moduleForComponent('print-test-attributes', 'StripTestSelectorsTransform plugin', {
  integration: true
});

if (config.stripTestSelectors) {

  test('it strips data-test-* attributes from components', function (assert) {
    this.render(hbs`{{print-test-attributes data-test-attribute="foobar"}}`);

    assert.equal(this.$('.attr').text(), '', 'the .attr div is empty');
  });

  test('it strips data-test-* attributes from components in block form', function (assert) {
    this.render(hbs`{{#print-test-attributes data-test-attribute="foobar"}}hello{{/print-test-attributes}}`);

    assert.equal(this.$('.attr').text(), '', 'the .attr div is empty');
  });

  test('it works with multiple data-test-* attributes on components', function (assert) {
    this.render(hbs`{{print-test-attributes data-test-attribute="foobar" data-test-second="second"}}`);

    assert.equal(this.$('.attr').text(), '', 'the .attr div is empty');
    assert.equal(this.$('.second').text(), '', 'the .second div is empty');
  });

  test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on components', function (assert) {
    this.render(hbs`{{print-test-attributes data-test-attribute="foobar" data-non-test="baz"}}`);

    assert.equal(this.$('.attr').text(), '', 'the .attr div is empty');
    assert.equal(this.$('.non-test').text(), 'baz', 'the .non-test div is not empty');
  });

  test('it leaves data-test attributes untouched on components', function (assert) {
    this.render(hbs`{{print-test-attributes data-test="foo"}}`);

    assert.equal(this.$('.data-test').text(), 'foo', 'the .data-test div is empty');
  });

  test('it leaves other data attributes untouched on components', function (assert) {
    this.render(hbs`{{print-test-attributes data-non-test="foo"}}`);

    assert.equal(this.$('.non-test').text(), 'foo', 'the .non-test div is not empty');
  });

} else {

  test('it does not strip data-test-* attributes from components', function (assert) {
    this.render(hbs`{{print-test-attributes data-test-attribute="foobar"}}`);

    assert.equal(this.$('.attr').length, 1, 'the .attr div is present');
    assert.equal(this.$('.attr').text(), 'foobar', 'the .attr div is not empty');
  });

}
