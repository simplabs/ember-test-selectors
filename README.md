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

- Removes attributes starting with `data-test-` from HTML tags and
  component/helper invocations in your templates for production builds

- Removes properties starting with `data-test-` from your JS objects like
  component classes for production builds

- Automatically binds properties starting with `data-test-` on all components
  for development/testing builds

More information on why that is useful are available on our
[blog](http://simplabs.com/blog/2016/03/04/ember-test-selectors.html)!

[![ember-test-selectors](https://cloud.githubusercontent.com/assets/2922250/25236119/0cc8e13a-25b5-11e7-8a5b-f29589384833.png)
](https://embermap.com/video/ember-test-selectors)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```bash
ember install ember-test-selectors
```


Usage
------------------------------------------------------------------------------

In your templates you are now able to use `data-test-*` attributes, which are
automatically removed from `production` builds:

```hbs
<article>
  <h1 data-test-post-title data-test-resource-id={{post.id}}>{{post.title}}</h1>
  <p>{{post.body}}</p>
  <button data-test-like-button>Like</button>
</article>
```

Once you've done that you can use attribute selectors to look up and interact
with those elements:

```js
assert.dom('[data-test-post-title]').hasText('Ember is great!');

await click('[data-test-like-button]');
```

### Usage with Components

You can use the same syntax also for component invocations:

```hbs
<Spinner @color="blue" data-test-spinner>
```

Inside the `Spinner` component template the `data-test-spinner` attribute will
be applied to the element that has `...attributes` on it, or on the component
wrapper `div` element if you don't use `tagName = ''`.


### Usage with Curly Components

If you still use the old curly invocation syntax for components you can pass
`data-test-*` arguments to the components and they will automatically be bound
on the wrapper element too:

```handlebars
{{spinner color="blue" data-test-spinner=true}}
```

Please note that the automatic argument binding only works for components based
on `@ember/component`, but not `@glimmer/component`.


### Usage in Ember addons

If you want to use ember-test-selectors in an addon make sure that it appears
in the `dependencies` section of the `package.json` file, not in the
`devDependencies`. This ensures that the selectors are also stripped correctly
even if the app that uses the addon does not use ember-test-selectors itself.


Configuration
------------------------------------------------------------------------------

You can override when the `data-test-*` attributes should be stripped from the
build by modifying your `ember-cli-build.js` file:

```js
var app = new EmberApp({
  'ember-test-selectors': {
    strip: false
  }
});
```

`strip` accepts a `Boolean` value and defaults to `!app.tests`, which means
that the attributes will be stripped for production builds, unless the build
was triggered by `ember test`. That means that if you use
`ember test --environment=production` the test selectors will still work, but
for `ember build -prod` they will be stripped out.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

ember-test-selectors is developed by and &copy;
[simplabs GmbH](http://simplabs.com) and contributors. It is released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
