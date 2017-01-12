ember-test-selectors
==============================================================================

[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]

[npm-badge]: https://img.shields.io/npm/v/ember-test-selectors.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-test-selectors
[travis-badge]: https://img.shields.io/travis/simplabs/ember-test-selectors/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/simplabs/ember-test-selectors

Enabling better element selectors in [Ember.js](http://emberjs.com) tests


Features
------------------------------------------------------------------------------

- Provides a `testSelector()` function to help you select the right elements

- Removes attributes starting with `data-test-` from HTML tags and
  component/helper invocations in your templates for production builds

- Removes properties starting with `data-test-` from your JS objects like
  component classes for production builds

- Automatically binds properties starting with `data-test-` on all components
  for development/testing builds

More information on why that is useful are available on our
[blog](http://simplabs.com/blog/2016/03/04/ember-test-selectors.html)!


Installation
------------------------------------------------------------------------------

```bash
ember install ember-test-selectors
```


Configuration
------------------------------------------------------------------------------

To modify the default configuration, place a block called `ember-test-selectors`
in your `ember-cli-build.js` file.

### Options

`environments`
Defines the environments in which you want the test selectors to be removed.
By default, selectors are only removed in the `production` environment. You
might also want to remove them in other staging environments for testing.

```javascript
var app = new EmberApp({
  'ember-test-selectors': {
    environments: ['production', 'staging']
  }
});
```


Test Helpers
------------------------------------------------------------------------------

`ember-test-selectors` comes with a test helper that can be used in acceptance
and integration tests:

* `testSelector('post-title')`: Returns a selector `[data-test-post-title]`
* `testSelector('resource-id', '2')`: Returns a selector `[data-test-resource-id="2"]`

The test helpers can be imported from the `ember-test-selectors` module:

```javascript
import testSelector from 'ember-test-selectors';
```

### Acceptance Test Usage

```js
find(testSelector('post-title')) // => find('[data-test-post-title]')
find(testSelector('selector', 'post-title')) // => find('[data-test-selector="post-title"]')
```

### Integration Test Usage

```js
this.$(testSelector('post-title')).click() // => this.$('[data-test-post-title]').click()
this.$(testSelector('selector', 'post-title')).click() // => this.$('[data-test-selector="post-title"]').click()
```


License
------------------------------------------------------------------------------

ember-test-selectors is developed by and &copy;
[simplabs GmbH](http://simplabs.com) and contributors. It is released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
