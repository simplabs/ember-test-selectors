import Ember from 'ember';

const { Component } = Ember;

const bindDataTestAttributes = function bindDataTestAttributes(component) {
  let dataTestAttributes = [];
  for (let attr in component) {
    if (attr.indexOf('data-test-') === 0) {
      dataTestAttributes.push(attr);
    }
  }

  let attributeBindings = component.getWithDefault('attributeBindings', []);
  component.set('attributeBindings', attributeBindings.concat(dataTestAttributes));
};

export default function addTestSelectorsToComponents() {
  Component.reopen({
    init() {
      bindDataTestAttributes(this);

      this._super(...arguments);
    }
  });
}
