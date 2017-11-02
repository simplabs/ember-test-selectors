import Ember from 'ember';
import { GTE_EMBER_1_13 } from 'ember-compatibility-helpers';

const { Controller } = Ember;

export default Controller.extend({
  shouldRenderParamTests: GTE_EMBER_1_13
});
