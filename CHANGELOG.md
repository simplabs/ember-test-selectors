## Unreleased (2017-11-15)

#### :bug: Bug Fix
* [#155](https://github.com/simplabs/ember-test-selectors/pull/155) Fix positional to hash params transform for Ember 1.11/1.12. ([@Turbo87](https://github.com/Turbo87))
* [#150](https://github.com/simplabs/ember-test-selectors/pull/150) bugfix(transform): Disable handlebars transform pre-Ember-1.13. ([@pzuraq](https://github.com/pzuraq))

#### :memo: Documentation
* [#141](https://github.com/simplabs/ember-test-selectors/pull/141) make note about positional params. ([@kellyselden](https://github.com/kellyselden))
* [#140](https://github.com/simplabs/ember-test-selectors/pull/140) Added a link to the deprecations warning to point to a codemod to help address it. ([@lorcan](https://github.com/lorcan))

#### :house: Internal
* [#154](https://github.com/simplabs/ember-test-selectors/pull/154) Skip positional params stripping tests on Ember versions without reliable support. ([@Turbo87](https://github.com/Turbo87))
* [#152](https://github.com/simplabs/ember-test-selectors/pull/152) add acceptance test for params-to-hash-pairs transform. ([@marcoow](https://github.com/marcoow))
* [#147](https://github.com/simplabs/ember-test-selectors/pull/147) Update "yarn.lock" file and "ember-cli-babel". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 6
- Chris Garrett ([pzuraq](https://github.com/pzuraq))
- Kelly Selden ([kellyselden](https://github.com/kellyselden))
- Lorcan Coyle ([lorcan](https://github.com/lorcan))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.7 (2017-08-04)

#### :rocket: Enhancement
* [#134](https://github.com/simplabs/ember-test-selectors/pull/134) Deprecate testSelector() helper. ([@marcoow](https://github.com/marcoow))

#### :bug: Bug Fix
* [#138](https://github.com/simplabs/ember-test-selectors/pull/138) use host to app.import. ([@kellyselden](https://github.com/kellyselden))

#### :house: Internal
* [#135](https://github.com/simplabs/ember-test-selectors/pull/135) chore: switch to yarn Closes [#132](https://github.com/simplabs/ember-test-selectors/issues/132). ([@geekygrappler](https://github.com/geekygrappler))
* [#133](https://github.com/simplabs/ember-test-selectors/pull/133) Update dependencies. ([@marcoow](https://github.com/marcoow))

#### Committers: 4
- Andy Brown ([geekygrappler](https://github.com/geekygrappler))
- Kelly Selden ([kellyselden](https://github.com/kellyselden))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))


## v0.3.6 (2017-07-11)

#### :rocket: Enhancement
* [#127](https://github.com/simplabs/ember-test-selectors/pull/127) Use new module imports. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#131](https://github.com/simplabs/ember-test-selectors/pull/131) Fix Babel version detection. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.5 (2017-07-06)

#### :bug: Bug Fix
* [#128](https://github.com/simplabs/ember-test-selectors/pull/128) Add cacheKey() methods to template transforms. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.4 (2017-05-30)

#### :bug: Bug Fix
* [#116](https://github.com/simplabs/ember-test-selectors/pull/116) Disable forced test selector stripping in addon templates. ([@Turbo87](https://github.com/Turbo87))
* [#117](https://github.com/simplabs/ember-test-selectors/pull/117) Update ".npmignore" file. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#114](https://github.com/simplabs/ember-test-selectors/pull/114) chore(package): update ember-cli to version 2.13.2. ([@Turbo87](https://github.com/Turbo87))
* [#113](https://github.com/simplabs/ember-test-selectors/pull/113) chore(package): update ember-cli-htmlbars to version 2.0.1. ([@Turbo87](https://github.com/Turbo87))
* [#108](https://github.com/simplabs/ember-test-selectors/pull/108) Update "ember-cli" to v2.13.0. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.3 (2017-04-24)

#### :rocket: Enhancement
* [#101](https://github.com/simplabs/ember-test-selectors/pull/101) Remove unused dependencies. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#102](https://github.com/simplabs/ember-test-selectors/pull/102) Fix ember-cli-babel@6 compatibility. ([@Turbo87](https://github.com/Turbo87))
* [#93](https://github.com/simplabs/ember-test-selectors/pull/93) Explicit dependency broccoli-stew. ([@raido](https://github.com/raido))

#### :memo: Documentation
* [#94](https://github.com/simplabs/ember-test-selectors/pull/94) Add video poster to README. ([@samselikoff](https://github.com/samselikoff))

#### Committers: 3
- Raido Kuli ([raido](https://github.com/raido))
- Sam Selikoff ([samselikoff](https://github.com/samselikoff))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.2 (2017-04-07)

#### :bug: Bug Fix
* [#92](https://github.com/simplabs/ember-test-selectors/pull/92) Revert "Switch to treeForAddonTestSupport". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.1 (2017-04-07)

#### :rocket: Enhancement
* [#89](https://github.com/simplabs/ember-test-selectors/pull/89) Switch to treeForAddonTestSupport. ([@raido](https://github.com/raido))

#### :bug: Bug Fix
* [#88](https://github.com/simplabs/ember-test-selectors/pull/88) fix: strip data-test-* attributes without explicit value from production build. ([@raido](https://github.com/raido))

#### :memo: Documentation
* [#90](https://github.com/simplabs/ember-test-selectors/pull/90) add link to ember-map video. ([@marcoow](https://github.com/marcoow))

#### Committers: 2
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Raido Kuli ([raido](https://github.com/raido))


## v0.3.0 (2017-03-27)

#### :rocket: Enhancement
* [#86](https://github.com/simplabs/ember-test-selectors/pull/86) Add Babel 6 compatibility. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#85](https://github.com/simplabs/ember-test-selectors/pull/85) fix package.json. ([@marcoow](https://github.com/marcoow))

#### :house: Internal
* [#84](https://github.com/simplabs/ember-test-selectors/pull/84) update ember-cli and other libraries. ([@marcoow](https://github.com/marcoow))
* [#64](https://github.com/simplabs/ember-test-selectors/pull/64) Import ESLint config from eslint-config-simplabs. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.2.1 (2017-01-25)

#### :bug: Bug Fix
* [#59](https://github.com/simplabs/ember-test-selectors/pull/59) attributeBindings is now frozen in debug builds on v2.11, slice it before pushing. ([@bgentry](https://github.com/bgentry))

#### :house: Internal
* [#63](https://github.com/simplabs/ember-test-selectors/pull/63) dummy/components: Explicitly set attributeBindings to [] to test freezing. ([@Turbo87](https://github.com/Turbo87))
* [#61](https://github.com/simplabs/ember-test-selectors/pull/61) Upgrade to ember-cli v2.11.0. ([@Turbo87](https://github.com/Turbo87))
* [#60](https://github.com/simplabs/ember-test-selectors/pull/60) ember-try: Remove scenarios and rely entirely on "versionCompatibility". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Blake Gentry ([bgentry](https://github.com/bgentry))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.2.0 (2017-01-23)

#### :rocket: Enhancement
* [#57](https://github.com/simplabs/ember-test-selectors/pull/57) Add support for component data-test-* attributes without values. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#56](https://github.com/simplabs/ember-test-selectors/pull/56) tests: Fix typo. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#58](https://github.com/simplabs/ember-test-selectors/pull/58) GreenKeeper: Ignore "babel-core" updates. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.1.1 (2017-01-17)

#### :rocket: Enhancement
* [#53](https://github.com/simplabs/ember-test-selectors/pull/53) Add warning when tagName is empty and data-test-* attributes are used. ([@Turbo87](https://github.com/Turbo87))
* [#52](https://github.com/simplabs/ember-test-selectors/pull/52) Replace initializer with IIFE in the vendor tree. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#50](https://github.com/simplabs/ember-test-selectors/pull/50) add blueprint + test helper for integration tests. ([@bgentry](https://github.com/bgentry))

#### Committers: 2
- Blake Gentry ([bgentry](https://github.com/bgentry))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.1.0 (2017-01-12)

#### :rocket: Enhancement
* [#48](https://github.com/simplabs/ember-test-selectors/pull/48) Updated and simplified README file. ([@Turbo87](https://github.com/Turbo87))
* [#45](https://github.com/simplabs/ember-test-selectors/pull/45) Add Babel 5 plugin stripping "data-test-*" properties. ([@Turbo87](https://github.com/Turbo87))
* [#43](https://github.com/simplabs/ember-test-selectors/pull/43) Simplify testSelector() import. ([@Turbo87](https://github.com/Turbo87))
* [#27](https://github.com/simplabs/ember-test-selectors/pull/27) Auto bind component data-test-* attributes. ([@marcoow](https://github.com/marcoow))
* [#42](https://github.com/simplabs/ember-test-selectors/pull/42) Introduce "strip" and deprecate "environments" option. ([@Turbo87](https://github.com/Turbo87))
* [#40](https://github.com/simplabs/ember-test-selectors/pull/40) Strip "data-test-" attributes from component and helper invocations. ([@Turbo87](https://github.com/Turbo87))
* [#37](https://github.com/simplabs/ember-test-selectors/pull/37) Simplify AST walker and remove "lodash" dependency. ([@Turbo87](https://github.com/Turbo87))
* [#36](https://github.com/simplabs/ember-test-selectors/pull/36) Run tests with and without stripping test selectors. ([@Turbo87](https://github.com/Turbo87))
* [#25](https://github.com/simplabs/ember-test-selectors/pull/25) Simplify testSelector() function. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#44](https://github.com/simplabs/ember-test-selectors/pull/44) Fix default setting for "strip" option. ([@Turbo87](https://github.com/Turbo87))
* [#24](https://github.com/simplabs/ember-test-selectors/pull/24) Check `value` argument for absence, not falsiness.. ([@chriskrycho](https://github.com/chriskrycho))

#### :memo: Documentation
* [#47](https://github.com/simplabs/ember-test-selectors/pull/47) Update CHANGELOG. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#46](https://github.com/simplabs/ember-test-selectors/pull/46) CI: Enable automatic NPM deployment for tags. ([@Turbo87](https://github.com/Turbo87))
* [#39](https://github.com/simplabs/ember-test-selectors/pull/39) Change "npm test" to only run tests for current ember-try scenario. ([@Turbo87](https://github.com/Turbo87))
* [#38](https://github.com/simplabs/ember-test-selectors/pull/38) Remove/Replace remaining JSHint references. ([@Turbo87](https://github.com/Turbo87))
* [#35](https://github.com/simplabs/ember-test-selectors/pull/35) Update Ember to v2.10.0. ([@Turbo87](https://github.com/Turbo87))
* [#33](https://github.com/simplabs/ember-test-selectors/pull/33) Replace JSHint with ESLint. ([@Turbo87](https://github.com/Turbo87))
* [#32](https://github.com/simplabs/ember-test-selectors/pull/32) Use "jshint" directly for linting. ([@Turbo87](https://github.com/Turbo87))
* [#31](https://github.com/simplabs/ember-test-selectors/pull/31) CI: Run tests for all minor Ember versions again. ([@Turbo87](https://github.com/Turbo87))
* [#30](https://github.com/simplabs/ember-test-selectors/pull/30) update license. ([@marcoow](https://github.com/marcoow))
* [#29](https://github.com/simplabs/ember-test-selectors/pull/29) Update dependencies. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 4
- Chris Krycho ([chriskrycho](https://github.com/chriskrycho))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 0.0.5 (2016-11-23)

#### :rocket: Enhancement
* [#25](https://github.com/simplabs/ember-test-selectors/pull/25) Simplify testSelector() function. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#24](https://github.com/simplabs/ember-test-selectors/pull/24) Check `value` argument for absence, not falsiness.. ([@chriskrycho](https://github.com/chriskrycho))

#### Committers: 2
- Chris Krycho ([chriskrycho](https://github.com/chriskrycho))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 0.0.4 (2016-09-06)

#### :bug: Bug Fix
* [#22](https://github.com/simplabs/ember-test-selectors/pull/22) Fix Caching + Fix Tests + Updates. ([@blimmer](https://github.com/blimmer))

#### :memo: Documentation
* [#21](https://github.com/simplabs/ember-test-selectors/pull/21) fix documentation. ([@Fryie](https://github.com/Fryie))

#### Committers: 2
- Ben Limmer ([blimmer](https://github.com/blimmer))
- Pierpaolo Frasa ([Fryie](https://github.com/Fryie))


## 0.0.3 (2016-04-08)

#### :rocket: Enhancement
* [#14](https://github.com/simplabs/ember-test-selectors/pull/14) Add ability to specify envs to strip selectors.. ([@blimmer](https://github.com/blimmer))

#### :memo: Documentation
* [#15](https://github.com/simplabs/ember-test-selectors/pull/15) Fixed typo in README. ([@jmadson](https://github.com/jmadson))

#### :house: Internal
* [#16](https://github.com/simplabs/ember-test-selectors/pull/16) Remove duplicate repository field in package.json. ([@marcoow](https://github.com/marcoow))

#### Committers: 3
- Ben Limmer ([blimmer](https://github.com/blimmer))
- John Madson ([jmadson](https://github.com/jmadson))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))


## 0.0.2 (2016-03-21)

#### :rocket: Enhancement
* [#12](https://github.com/simplabs/ember-test-selectors/pull/12) Add test helpers. ([@pdud](https://github.com/pdud))
* [#11](https://github.com/simplabs/ember-test-selectors/pull/11) use shorthand data attributes. ([@marcoow](https://github.com/marcoow))

#### Committers: 2
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Philip Dudley ([pdud](https://github.com/pdud))


## 0.0.1 (2016-03-04)

#### :rocket: Enhancement
* [#7](https://github.com/simplabs/ember-test-selectors/pull/7) Add the plugin to the registry when in `production` environment. ([@pangratz](https://github.com/pangratz))

#### :bug: Bug Fix
* [#6](https://github.com/simplabs/ember-test-selectors/pull/6) Fix env based activation. ([@marcoow](https://github.com/marcoow))

#### :memo: Documentation
* [#5](https://github.com/simplabs/ember-test-selectors/pull/5) Update package.json. ([@pangratz](https://github.com/pangratz))
* [#3](https://github.com/simplabs/ember-test-selectors/pull/3) docs. ([@marcoow](https://github.com/marcoow))

#### :house: Internal
* [#4](https://github.com/simplabs/ember-test-selectors/pull/4) Add tests. ([@pangratz](https://github.com/pangratz))

#### Committers: 2
- Clemens Müller ([pangratz](https://github.com/pangratz))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
