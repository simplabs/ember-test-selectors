import Ember from 'ember';

const { Component } = Ember;

const component = Component.extend();

component.reopenClass({
  positionalParams: 'params'
});

export default component;
