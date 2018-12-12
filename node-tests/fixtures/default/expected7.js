import Ember from 'ember';
export default Ember.Component.extend({
  foo: 'foo',
  'data-test': 'test',
  'metadata-test-foo': 'metadata'
});
export let c2 = Ember.Component.extend({
  foo: 'foo'
});
