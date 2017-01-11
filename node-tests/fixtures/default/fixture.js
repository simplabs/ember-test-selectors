import Ember from 'ember';

export default Ember.Component.extend({
  foo: 'foo',
  'data-test': 'test',
  'data-test-foo': 'foo',
  'data-test-foobar': Ember.computed('data-test-foo', function() {
    return `${this.get('data-test-foo')}bar`
  }),
});
