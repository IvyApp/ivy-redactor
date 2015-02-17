import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * The HTML content of the editor.
   *
   * @property value
   * @type {String}
   * @default null
   */
  value: null,

  tagName: 'textarea',

  redactorSettings: [
    // settings
    'lang',
    'direction',

    'plugins',

    'focus',
    'focusEnd',

    'placeholder',

    'visual',
    'tabindex',

    'minHeight',
    'maxHeight',

    'linebreaks',
    'replaceDivs',
    'paragraphize',
    'cleanStyleOnEnter',
    'enterKey',

    'cleanOnPaste',
    'cleanSpaces',
    'pastePlainText',

    'autosave',
    'autosaveName',
    'autosaveInterval',
    'autosaveOnChange',

    'linkTooltip',
    'linkProtocol',
    'linkNofollow',
    'linkSize',

    'imageEditable',
    'imageLink',
    'imagePosition',
    'imageFloatMargin',
    'imageResizable',

    'imageUpload',
    'imageUploadParam',

    'uploadImageField',

    'dragImageUpload',

    'fileUpload',
    'fileUploadParam',

    'dragFileUpload',

    's3',

    'convertLinks',
    'convertUrlLinks',
    'convertImageLinks',
    'convertVideoLinks',

    'preSpaces',
    'tabAsSpaces',
    'tabKey',

    'scrollTarget',

    'toolbar',
    'toolbarFixed',
    'toolbarFixedTarget',
    'toolbarFixedTopOffset',
    'toolbarExternal',
    'toolbarOverflow',

    'source',
    'buttons',

    'buttonsHide',
    'buttonsHideOnMobile',

    'formatting',
    'formattingAdd',

    'tabifier',

    'deniedTags',
    'allowedTags',

    'removeComments',
    'replaceTags',
    'replaceStyles',
    'removeDataAttr',

    'removeAttr',
    'allowedAttr',

    'removeWithoutAttr',
    'removeEmpty',

    'activeButtons',
    'activeButtonsStates',

    'shortcuts',
    'shortcutsAdd',

    // private
    'buffer',
    'rebuffer',
    'emptyHtml',
    'invisibleSpace',
    'imageTypes',
    'indentValue',
    'verifiedTags',
    'inlineTags',
    'alignmentTags',
    'blockLevelElements',

    // lang
    'langs'
  ],

  /**
   * Called when the HTML content changes. Updates the `value` property.
   *
   * @method changeCallback
   * @param {String} html
   */
  changeCallback: function(html) {
    this.set('value', html);
  },

  destroyRedactor: function() {
    this.removeObserver('value', this, this.valueDidChange);

    this.$().redactor('core.destroy');
  },

  initRedactor: Ember.on('didInsertElement', function() {
    var redactorOptions = {};

    redactorOptions.changeCallback = Ember.run.bind(this, this.changeCallback);

    Ember.EnumerableUtils.forEach(this.get('redactorSettings'), function(key) {
      if (key in this) { redactorOptions[key] = this.get(key); }
    }, this);

    // By default, Redactor indents HTML when `code.get` is called. This is
    // a problem because `valueDidChange` will then always call `code.set`,
    // which resets the cursor position.
    redactorOptions.tabifier = false;

    this.$().redactor(redactorOptions);

    this.addObserver('value', this, this.valueDidChange);
    this.updateRedactorCode();

    this.one('willDestroyElement', this, this.destroyRedactor);
  }),

  updateRedactorCode: function() {
    var value = this.get('value');
    var $elem = this.$();

    if (value && value !== $elem.redactor('code.get')) {
      $elem.redactor('code.set', value);
    }
  },

  valueDidChange: function() {
    Ember.run.once(this, this.updateRedactorCode);
  }
});
