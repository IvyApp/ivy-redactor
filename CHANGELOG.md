# ivy-redactor

## master

## 1.0.1

* Stop using `Ember.on` for `didInsertElement` / `willDestroyElement`, in favor
  of treating them as methods and calling `this._super` appropriately.
* Remove unnecessary `polyfills-pkg` Bower dependency.

## 1.0.0

* Upgrade to ember-cli 2.4.1
* Remove usage of EnumerableUtils, which was removed in Ember 2.0.
* Remove standalone builds.
* Add support for Redactor 10.2.5, the last 10.x release.

## 1.0.0-beta.2

* Remove version suffix from ivy-redactor.js.
* Upgrade to ember-cli 0.2.3.

## 1.0.0-beta.1

* Upgrade to ember-cli 0.1.5.
* Upgrade to ember 1.9.1 in dummy app.
* Remove unnecessary ember-data dependency in dummy app.

## 0.2.1

* Add missing `ivy-redactor/index` module.

## 0.2.0

* Convert to an ember-cli addon.

## 0.1.1

* Fix `destroy` call in `willDestroyElement`. Redactor 10 changed this to
  `core.destroy`.

## 0.1.0

* Initial commit.
