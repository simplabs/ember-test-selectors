import Ember from 'ember';

export default Ember.Component.extend({
  foo: 'foo',
  'data-test': 'test',
  'metadata-test-foo': 'metadata',
  'data-test-foo': 'foo',
  'data-test-foobar': Ember.computed('data-test-foo', function() {
    return `${this.get('data-test-foo')}bar`
  }),
  supportsDataTestProperties: true
});

export let c2 = Ember.Component.extend({
  foo: 'foo',
  'supportsDataTestProperties': true
});
