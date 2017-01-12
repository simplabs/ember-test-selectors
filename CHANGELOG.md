# 0.1.0

* Removed unnecessary `lodash` dependency (#37)
* Added `data-test-*` attribute stripping to component and helper
  invocations in Handlebars files (#40)
* Added `strip` and deprecated `environments` options (#42)
* Added automatic binding for `data-test-*` properties in components (#27)
* Simplified `testSelector()` import to `ember-test-helpers` (#43)
* Added Babel plugin that automatically removed `data-test-*` keys from
  all objects including components and controllers (#45) 

# 0.0.5

* the `testSelector` helper now treats empty but non-none values (like `0`)
  correctly, see #24.

# 0.0.4 

* Fixed a caching warning, see #22.
* Fixed and improved tests, see #22.

# 0.0.3

* The environments that ember-test-selectors strips `data-test-*` attributes
  for can now be configured, see #14.
* Fix the `package.json` to include the correct repository URL, see #16.

# 0.0.2

* Add the `testSelector` test helper that makes generating `data` attribute
  based selectors easier, see #12.

# 0.0.1

initial release
