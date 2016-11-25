import Ember from 'ember';

const { getPrototypeOf } = Object;
const { computed, Component, get } = Ember;

const nameOfComponent = function nameOfComponent(component, config) {
  let templateName = component._renderNode.lastResult.template.meta.moduleName;
  templateName = templateName.replace(/\.hbs$/, '');
  templateName = templateName.replace(new RegExp(`${config.modulePrefix}\/templates\/components\/`), '');
  return templateName;
}

export default function addTestSelectorsToComponents(config) {
  Component.reopen({
    init() {
      let attributeBinding = `-data-test-component-selector:data-test-component`;
      this.attributeBindings = (this.attributeBindings || []).concat([attributeBinding]);

      return this._super(...arguments);
    },

    '-data-test-component-selector': computed(function() {
      return nameOfComponent(this, config);
    })
  });
}
