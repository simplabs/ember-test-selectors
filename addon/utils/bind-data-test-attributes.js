import { warn } from '@ember/debug';
import { isArray } from '@ember/array';

const TEST_SELECTOR_PREFIX = /data-test-.*/;

export default function bindDataTestAttributes(component) {
  let dataTestProperties = [];
  for (let attr in component) {
    if (TEST_SELECTOR_PREFIX.test(attr)) {
      dataTestProperties.push(attr);
    }
  }

  if (dataTestProperties.length === 0) {
    return;
  }

  let tagName = component.get('tagName');
  if (tagName === '') {
    let message = `ember-test-selectors could not bind data-test-* properties on ${component} ` +
      `automatically because tagName is empty.`;

    warn(message, false, {
      id: 'ember-test-selectors.empty-tag-name',
    });

    return;
  }

  let computedBindings = component.attributeBindings && component.attributeBindings.isDescriptor;
  if (computedBindings) {
    let message = `ember-test-selectors could not bind data-test-* properties on ${component} ` +
      `automatically because attributeBindings is a computed property.`;

    warn(message, false, {
      id: 'ember-test-selectors.computed-attribute-bindings',
    });

    return;
  }

  let attributeBindings = component.getWithDefault('attributeBindings', []);
  if (!isArray(attributeBindings)) {
    attributeBindings = [attributeBindings];
  } else {
    attributeBindings = attributeBindings.slice();
  }

  dataTestProperties.forEach(it => attributeBindings.push(it));

  component.set('attributeBindings', attributeBindings);
}
