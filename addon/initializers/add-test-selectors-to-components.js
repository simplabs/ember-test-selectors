import Ember from 'ember';

const { getPrototypeOf } = Object;
const { computed, Component } = Ember;

export default function addTestSelectorsToComponents() {
  Component.reopen({
    init() {
      let attributeBinding = `-data-test-component-selector:data-test-component`;
      this.attributeBindings = (this.attributeBindings || []).concat([attributeBinding]);

      return this._super(...arguments);
    },

    '-data-test-component-selector': computed(function() {
      return getPrototypeOf(this)._debugContainerKey.replace(/^component:/, '');
    })
  });
}
