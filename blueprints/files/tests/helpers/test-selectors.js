import Ember from 'ember';
import bindDataTestAttributes from 'ember-test-selectors/utils/bind-data-test-attributes';

const { Component } = Ember;

Component.reopen({
  init() {
    this._super(...arguments);
    bindDataTestAttributes(this);
  }
});
