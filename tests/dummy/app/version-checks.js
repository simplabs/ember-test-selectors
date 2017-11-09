import Ember from 'ember';

const { VERSION } = Ember;

const EMBERS_WITHOUT_POSITIONAL_PARAMS = [
  '1.12',
  '1.11',
];

const EMBERS_WITHOUT_RELIABLE_POSITIONAL_PARAMS = [
  '2.2',
  '2.1',
  '2.0',
  '1.13',
  '1.12',
  '1.11',
];

export const hasPositionalParams = !EMBERS_WITHOUT_POSITIONAL_PARAMS
  .some(version => VERSION.indexOf(`${version}.`) === 0);

export const hasReliablePositionalParams = !EMBERS_WITHOUT_RELIABLE_POSITIONAL_PARAMS
  .some(version => VERSION.indexOf(`${version}.`) === 0);
