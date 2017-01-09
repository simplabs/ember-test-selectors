import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

import config from 'dummy/config/environment';

moduleForComponent('data-test-component', 'StripTestSelectorsTransform plugin', {
  integration: true
});

if (config.stripTestSelectors) {

  test('it strips data-test-* attributes from HTML tags', function (assert) {
    this.render(hbs`<span data-test-id="my-id" ></span>`);

    assert.equal(this.$('span').length, 1, 'the span is present');
    assert.equal(this.$('span[data-test-id="my-id"]').length, 0, 'data-test-id is stripped');
  });

  test('it works with multiple data-test-* attributes on HTML tags', function (assert) {
    this.render(hbs`<span data-test-first data-test-second"second-id" ></span>`);

    assert.equal(this.$('span').length, 1, 'the span is present');
    assert.equal(this.$('span[data-test-first]').length, 0, 'data-test-first is stripped');
    assert.equal(this.$('span[data-test-second="second-id"]').length, 0, 'data-test-second is stripped');
  });

  test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on HTML tags', function (assert) {
    this.render(hbs`<span data-id="my-id" data-test-id="my-test-id" ></span>`);

    assert.equal(this.$('span').length, 1, 'the span is present');
    assert.equal(this.$('span[data-id="my-id"]').length, 1, 'data-id is not stripped');
    assert.equal(this.$('span[data-test-id="my-test-id"]').length, 0, 'data-test-id is stripped');
  });

  test('it leaves data-test attributes untouched on HTML tags', function (assert) {
    this.render(hbs`<span data-test="my-id" ></span>`);

    assert.equal(this.$('span').length, 1, 'the span is present');
    assert.equal(this.$('span[data-test="my-id"]').length, 1, 'data-test-id is not stripped');
  });

  test('it leaves other data attributes untouched on HTML tags', function (assert) {
    this.render(hbs`<span data-id="my-id" ></span>`);

    assert.equal(this.$('span').length, 1, 'the span is present');
    assert.equal(this.$('span[data-id="my-id"]').length, 1, 'data-id is not stripped');
  });

} else {

  test('it does not strip data-test-* attributes from HTML tags', function (assert) {
    this.render(hbs`<span data-test-id="my-id" ></span>`);

    assert.equal(this.$('span').length, 1, 'the span is present');
    assert.equal(this.$('span[data-test-id="my-id"]').length, 1, 'data-test-id is not stripped');
  });

}
