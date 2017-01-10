const TEST_SELECTOR_PREFIX = /data-test-.*/;

export default function bindDataTestAttributes(component) {
  let attributeBindings = component.getWithDefault('attributeBindings', []);

  for (let attr in component) {
    if (TEST_SELECTOR_PREFIX.test(attr)) {
      attributeBindings.push(attr);
    }
  }

  component.set('attributeBindings', attributeBindings);
}
