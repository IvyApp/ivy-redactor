# ivy-redactor

An [Ember](http://emberjs.com) component for the
[Redactor](http://imperavi.com/redactor/) WYSIWYG editor.

This is only a component for interacting with Redactor, and does not include
Redactor itself. Redactor is commercial software that you must purchase
a license for. You can do so [here](http://imperavi.com/redactor/download/).

This library has been tested against Redactor 10.0. It will not work with older
versions due to some fairly major API changes made in Redactor 10.

## Installation

```sh
npm install --save-dev ivy-redactor
ember generate ivy-redactor
```

You'll also need to copy the Redactor library files into `vendor/redactor`.

Or if you aren't using ember-cli, you can use this library as a standalone
[Bower](http://bower.io/) package:

```sh
bower install --save ivy-codemirror
```

...and then add Redactor and the `ivy-redactor.js` script to your page.

## Usage

```handlebars
{{ivy-redactor value=myHTML}}
```

There are also a ton of
[Redactor settings](http://imperavi.com/redactor/docs/settings/) you can set as
well:

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

Fork this repo, make a new branch, and send a pull request. Make sure your
change is tested or it won't be merged.

To run tests:

```sh
git clone # <this repo>
npm install
npm test
```

Or, to start a test server that continually runs (for development):

```sh
ember test --server
```
