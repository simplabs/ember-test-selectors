import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import testSelector from 'dummy/tests/helpers/ember-test-selectors';

moduleForAcceptance('Acceptance | test');

test('it automatically binds all "data-test-*" attributes', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find(testSelector('predefined-attribute', 'test-value')).length, 1);
    assert.equal(find(testSelector('on-the-fly-attribute')).length, 1);
  });
});
