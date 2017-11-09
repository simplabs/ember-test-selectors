import Ember from 'ember';
import { hasPositionalParams } from 'dummy/version-checks';

const { Controller } = Ember;

export default Controller.extend({
  hasPositionalParams,
});
