import { module, test } from 'qunit';

import { ts } from 'ember-test-selectors';

module('Unit | ts');

test('converts %-prefixed tokens to data-test selectors', function(assert) {
  function check(input, output) {
    assert.equal(input, output, output);
  }

  check(ts`h1`, 'h1');
  check(ts`.foo`, '.foo');
  check(ts`%foo`, '[data-test-foo]');
  check(ts`%foo=1`, '[data-test-foo="1"]');
  check(ts`%foo=bar`, '[data-test-foo="bar"]');
  check(ts`%foo="bar"`, '[data-test-foo="bar"]');
  check(ts`%foo="bar baz"`, '[data-test-foo="bar baz"]');
  check(ts`%foo="bar" baz`, '[data-test-foo="bar"] baz');
  check(ts`%foo='bar' baz`, '[data-test-foo="bar"] baz');
  check(ts`%foo=bar baz`, '[data-test-foo="bar"] baz');
  check(ts`.foo %bar #baz`, '.foo [data-test-bar] #baz');

  check(ts`%primitive-list-header .foo %pointer=3`,
    '[data-test-primitive-list-header] .foo [data-test-pointer="3"]');

  check(ts`%foo=${'bar'}`, '[data-test-foo="bar"]');
  check(ts`%${'foo'}=${'bar'}`, '[data-test-foo="bar"]');
  check(ts`.foo %bar=${5} #bar %foo .${'blubb'}`, '.foo [data-test-bar="5"] #bar [data-test-foo] .blubb');
  check(ts`.foo ${'%bar'}`, '.foo [data-test-bar]');

  // The following examples are "broken" but fixing them properly would require
  // a custom CSS selector parser which is out-of-scope for this addon. If you
  // have such a use case please assemble the test selector manually.

  check(ts`%foo='bar" baz`, '[data-test-foo="\'bar""] baz');
  check(ts`[value="foo %bar baz"]`, '[value="foo [data-test-bar] baz"]');
});
