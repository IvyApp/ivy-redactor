# ivy-redactor

An [Ember][1] component for the [Redactor][2] WYSIWYG editor.

This is only a component for interacting with Redactor, and does not include
Redactor itself. Redactor is commercial software that you must purchase
a license for. You can do so [here][3].

This library has been tested against Redactor 10.0. It will not work with older
versions due to some fairly major API changes made in Redactor 10.

## Installation

```sh
$ npm install ivy-redactor
```

or...

```sh
$ bower install ivy-redactor
```

Then include the script(s) into your application.

### npm + browserify

```js
require('ivy-redactor');
```

### amd

Register `ivy-redactor` as a [package][4], then:

```js
define(['ivy-redactor'], ...)
```

### named-amd

You ought to know what you're doing if this is the case.

### globals

```html
<script src="bower_components/ivy-redactor/dist/globals/main.js"></script>
```

You'll also need to install the initializer to make the `ivy-redactor`
component available in your templates:

```js
App = Ember.Application.create(/* ... */);
App.initializer(ivy.redactor.initializer);
```

## Usage

```handlebars
{{ivy-redactor value=myCode}}
```

There are also a ton of [Redactor settings][5] you can set as well:

  * `activeButtons`
  * `activeButtonsStates`
  * `allowedAttr`
  * `allowedTags`
  * `buttonSource`
  * `buttons`
  * `buttonsHide`
  * `buttonsHideOnMobile`
  * `cleanOnPaste`
  * `cleanSpaces`
  * `cleanStyleOnEnter`
  * `convertImagesLinks`
  * `convertLinks`
  * `convertUrlLinks`
  * `convertVideoLinks`
  * `deniedTags`
  * `formatting`
  * `formattingAdd`
  * `linebreaks`
  * `linkNofollow`
  * `linkProtocol`
  * `linkSize`
  * `linkTooltip`
  * `maxHeight`
  * `minHeight`
  * `paragraphize`
  * `pastePlainText`
  * `placeholder`
  * `preSpaces`
  * `removeComments`
  * `removeDataAttr`
  * `removeEmpty`
  * `replaceDivs`
  * `replaceStyles`
  * `replaceTags`
  * `shortcuts`
  * `shortcutsAdd`
  * `tabAsSpaces`
  * `tabindex`
  * `toolbar`
  * `toolbarExternal`
  * `toolbarFixed`
  * `toolbarFixedTarget`
  * `toolbarOverflow`

Please note that **these are not bindings**. Unfortunately, Redactor doesn't
provide a way to change the settings after the editor has already been
initialized.

## Contributing

```sh
$ git clone # <this repo>
$ npm install
```

Then place `redactor.css` and `redactor.js` into the `redactor` directory at
the root of this project.

```sh
# during dev
$ broccoli serve
# new tab
$ testem
```

Fork this repo, make a new branch, and send a pull request. Make sure your
change is tested or it won't be merged.

[1]: http://emberjs.com
[2]: http://imperavi.com/redactor/
[3]: http://imperavi.com/redactor/download/
[4]: http://requirejs.org/docs/api.html#packages
[5]: http://imperavi.com/redactor/docs/settings/
