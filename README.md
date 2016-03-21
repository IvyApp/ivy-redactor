# ivy-redactor

An [Ember](http://emberjs.com) component for the
[Redactor](http://imperavi.com/redactor/) WYSIWYG editor.

This is only a component for interacting with Redactor, and does not include
Redactor itself. Redactor is commercial software that you must purchase
a license for. You can do so [here](http://imperavi.com/redactor/download/).

**NOTE:** This library is for Redactor 10. It has been tested with the latest
(and likely final) release of the 10.x series, 10.2.5. It does not work with
older versions due to some fairly major API changes made in Redactor 10.

## Installation

For Ember CLI versions >= 0.2.3:

```sh
ember install ivy-redactor
```

For Ember CLI versions 0.1.5 through 0.2.3:

```sh
ember install:addon ivy-redactor
```

For Ember CLI versions < 0.1.5:

```sh
npm install --save-dev ivy-redactor
ember generate ivy-redactor
```

You'll also need to copy the Redactor library files into `vendor/redactor`.

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
  * `toolbar`: Redactor 10.1.2 (and possibly other versions) will throw an
    error during teardown if this option is set to `false`. I've filed an issue
    with Imperavi, so hopefully this will be resolved in the next Redactor
    release. Until then, use this option at your own peril.
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
