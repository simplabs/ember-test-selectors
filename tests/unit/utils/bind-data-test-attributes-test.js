import { module, test } from 'qunit';
import EmberObject, { computed } from '@ember/object';
import EmberMixin from '@ember/object/mixin';
import { dasherize } from '@ember/string';

import bindDataTestAttributes from 'ember-test-selectors/utils/bind-data-test-attributes';

module('Unit | Utility | bind data test attributes');

test('it adds missing attributeBindings array', function(assert) {
  let Fixture = EmberObject.extend({
    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar',
  });

  assert.deepEqual(instance.get('attributeBindings'), undefined);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'),
    ['data-test-from-invocation', 'data-test-from-factory']);
});

test('it adds to existing attributeBindings array', function(assert) {
  let Fixture = EmberObject.extend({
    attributeBindings: ['foo', 'bar'],

    foo: 1,
    bar: 2,

    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar',
  });

  assert.deepEqual(instance.get('attributeBindings'), ['foo', 'bar']);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'),
    ['foo', 'bar', 'data-test-from-invocation', 'data-test-from-factory']);
});

test('it converts existing attributeBindings string to array', function(assert) {
  let Fixture = EmberObject.extend({
    attributeBindings: 'foo',

    foo: 1,

    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar',
  });

  assert.deepEqual(instance.get('attributeBindings'), 'foo');

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'),
    ['foo', 'data-test-from-invocation', 'data-test-from-factory']);
});

test('it only adds data-test-* properties', function(assert) {
  let Fixture = EmberObject.extend({
    foo: 1,
    bar: 2,

    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    baz: 3,

    'data-test-from-invocation': 'bar',
  });

  assert.deepEqual(instance.get('attributeBindings'), undefined);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'),
    ['data-test-from-invocation', 'data-test-from-factory']);
});

test('it does not add a data-test property', function(assert) {
  let Fixture = EmberObject.extend({
    'data-test': 'foo',
  });
  let instance = Fixture.create();

  assert.deepEqual(instance.get('attributeBindings'), undefined);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), undefined);
});

test('it breaks if attributeBindings is a computed property', function(assert) {
  let Fixture = EmberObject.extend({
    attributeBindings: computed('prop', function() {
      return [this.get('prop')];
    }).readOnly(),

    foo: 5,

    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    prop: 'foo',

    'data-test-from-invocation': 'bar',
  });

  assert.throws(() => bindDataTestAttributes(instance));
});

test('it breaks if tagName is empty', function(assert) {
  let Fixture = EmberObject.extend({
    tagName: '',
    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar',
  });

  assert.throws(() => bindDataTestAttributes(instance));
});

test('it does not breaks if tagName is empty and supportsDataTestProperties is set', function(assert) {
  assert.expect(0);

  let Fixture = EmberObject.extend({
    tagName: '',
    supportsDataTestProperties: true,
    'data-test-from-factory': 'foo',
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar',
  });

  bindDataTestAttributes(instance);
});

test('issue #106', function(assert) {
  let Component = EmberObject.extend({});

  Component.reopen({
    init() {
      this._super(...arguments);
      bindDataTestAttributes(this);
    },
  });

  let Mixin = EmberMixin.create({
    init() {
      this._super(...arguments);

      if (this.tagName !== '') {
        let componentName = dasherize(this._XXXdebugContainerKey.replace(/\//g, '-').split(':')[1]);
        this.set('data-test-component', componentName);

        let dataTestAttr = ['data-test-component'];
        this.attributeBindings = this.attributeBindings ? this.attributeBindings.concat(dataTestAttr) : dataTestAttr;
      }
    },
  });

  Component.reopen(Mixin);

  let Fixture1 = Component.extend({
    _XXXdebugContainerKey: 'component:fixture1',
    tagName: 'span',
  });

  let fixture1 = Fixture1.create();

  assert.strictEqual(fixture1.get('data-test-component'), 'fixture1');

  let Fixture2 = Component.extend({
    _XXXdebugContainerKey: 'component:fixture2',
    tagName: '',
  });

  let fixture2 = Fixture2.create();

  assert.strictEqual(fixture2.get('data-test-component'), undefined);
});

