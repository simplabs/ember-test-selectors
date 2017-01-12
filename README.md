ember-test-selectors
==============================================================================

[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]

[npm-badge]: https://img.shields.io/npm/v/ember-test-selectors.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-test-selectors
[travis-badge]: https://img.shields.io/travis/simplabs/ember-test-selectors/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/simplabs/ember-test-selectors

This Ember CLI Addon __removes all HTML 5 data attributes starting with
`data-test-` in the `production` environment__. That allows using data
attributes as element selectors in integration and acceptance tests without
polluting the markup that is delivered to the end user.

## Installation

```bash
ember install ember-test-selectors
```

## Why use `data` attributes as test selectors?

Integration and acceptance tests usually __interact with and assert on the
presence of certain elements__ in the markup that an application renders. These
elements are identified using CSS selectors. Most projects use one of three
approaches for CSS selectors in tests:

### Selectors based on HTML structure

This approach simply selects elements by their position in the rendered HTML.
For the following template:

```html
<article>
  <h1>Post Title</h1>
  <p>Post Body…</p<>
</article>
```

one might select the post's title with the selector `article h1`. Of course
this breaks when changing the `<h1>` to a `<h2>` while the functionality being
tested is probably not affected by that change.

### Selectors based on CSS classes

This approach selects elements by CSS classes. For the following template:

```hbs
<article>
  <h1 class="post-title">{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

one might select the post title with the selector `.post-title`. This of course
breaks when the CSS class is changed or renamed, although that would only be a
visual change which shouldn't affect the tests at all.

Many projects use special CSS classes that are only used for testing to
overcome this problem like `js-post-title`. While that approach is definitely
more stable it is often hard to maintain. Also it is very hard to encode
additional information in these CSS classes like e.g. the post's id.

### Selectors based on `data` attributes

This approach uses HTML 5 `data` attributes to select elements. For the
following template:

```hbs
<article>
  <h1 data-test-post-title>{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

one would select the post's title with the selector
`*[data-test-post-title]`. While the selector is arguably a bit longer this
approach clearly separates the test selectors from the rest of the markup and
is resilient to change as it would simply be applied to the element rendering
the post's title, regardless of the HTML structure, CSS classes etc. Also it
allows to encode more data in the markup like e.g. the post's id:

```hbs
<article>
  <h1 data-test-post-title data-test-resource-id="{{post.id}}">{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

`ember-test-selectors` makes sure to remove all these `data-test-*` attributes in the
`production` environment so that __users will have perfectly clean HTML
delivered__:

```html
<article>
  <h1>My great post</h1>
  <p>Bla bla…</p>
</article>
```

## Configuration
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

## Test Helpers

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

## License

ember-test-selectors is developed by and &copy;
[simplabs GmbH](http://simplabs.com) and contributors. It is released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
