import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import config from 'dummy/config/environment';

if (!config.stripTestSelectors) {

  /*
   * We use an acceptance test here to test the "ember-test-selectors" initializer,
   * because initializers are only applied in acceptance tests, but not in
   * component integration tests.
   */
  moduleForAcceptance('Acceptance | Initializer | ember-test-selectors', {
    beforeEach() {
      visit('/bind-test');
    },
  });

  test('it binds data-test-* attributes on components', function(assert) {
    assert.equal(find('.test1').find('div[data-test-first]').length, 1, 'data-test-first exists');
    assert.equal(find('.test1').find('div[data-test-first="foobar"]').length, 1, 'data-test-first has correct value');
  });

  test('it binds data-test-* attributes on components in block form', function(assert) {
    assert.equal(find('.test2').find('div[data-test-first]').length, 1, 'data-test-first exists');
    assert.equal(find('.test2').find('div[data-test-first="foobar"]').length, 1, 'data-test-first has correct value');
  });

  test('it works with multiple data-test-* attributes on components', function(assert) {
    assert.equal(find('.test3').find('div[data-test-first]').length, 1, 'data-test-first exists');
    assert.equal(find('.test3').find('div[data-test-first="foobar"]').length, 1, 'data-test-first has correct value');
    assert.equal(find('.test3').find('div[data-test-second]').length, 1, 'data-test-second exists');
    assert.equal(find('.test3').find('div[data-test-second="second"]').length, 1, 'data-test-second has correct value');
  });

  test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on components', function(assert) {
    assert.equal(find('.test4').find('div[data-test-first]').length, 1, 'data-test-first exists');
    assert.equal(find('.test4').find('div[data-test-first="foobar"]').length, 1, 'data-test-first has correct value');
    assert.equal(find('.test4').find('div[data-non-test]').length, 0, 'data-non-test does not exists');
  });

  test('it leaves data-test attribute untouched on components', function(assert) {
    assert.equal(find('.test5').find('div[data-test]').length, 0, 'data-test does not exists');
  });

  test('it leaves other data attributes untouched on components', function(assert) {
    assert.equal(find('.test6').find('div[data-non-test]').length, 0, 'data-non-test does not exists');
  });

  test('it binds data-test-* attributes with boolean values on components', function(assert) {
    assert.equal(find('.test7').find('div[data-test-with-boolean-value]').length, 1, 'data-test-with-boolean-value exists');
  });

  test('it binds data-test-* attributes without values on components', function(assert) {
    assert.equal(find('.test8').find('div[data-test-without-value]').length, 1, 'data-test-without-value exists');
  });

  test('it binds data-test-* attributes without values on block components', function(assert) {
    assert.equal(find('.test9').find('div[data-test-without-value]').length, 1, 'data-test-without-value exists');
  });

  test('it leaves data-test attribute without value untouched on components', function(assert) {
    assert.equal(find('.test10').find('div[data-test]').length, 0, 'data-test does not exists');
  });

}
