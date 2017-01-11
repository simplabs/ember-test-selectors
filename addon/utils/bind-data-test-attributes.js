import Ember from 'ember';

const TEST_SELECTOR_PREFIX = /data-test-.*/;

export default function bindDataTestAttributes(component) {
  let computedBindings = component.attributeBindings && component.attributeBindings.isDescriptor;
  if (computedBindings) {
    let message = `ember-test-selectors could not bind data-test-* properties on ${component} ` +
      `automatically because attributeBindings is a computed property.`;

    return Ember.warn(message, false, {
      id: 'ember-test-selectors.computed-attribute-bindings',
    });
  }

  let attributeBindings = component.getWithDefault('attributeBindings', []);

  if (!Ember.isArray(attributeBindings)) {
    attributeBindings = [attributeBindings];
  }

  for (let attr in component) {
    if (TEST_SELECTOR_PREFIX.test(attr)) {
      attributeBindings.push(attr);
    }
  }

  component.set('attributeBindings', attributeBindings);
}
