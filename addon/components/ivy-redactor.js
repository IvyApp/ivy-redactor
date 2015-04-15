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

  concatenatedProperties: ['redactorCallbacks', 'redactorSettings'],

  redactorCallbacks: [
    'changeCallback'
  ],

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
    'shortcutsAdd'
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

  _destroyRedactor: Ember.on('willDestroyElement', function() {
    this.removeObserver('value', this, this._valueDidChange);

    this.$().redactor('core.destroy');
  }),

  _initRedactor: Ember.on('didInsertElement', function() {
    var options = {};

    this._setupRedactorCallbacks(options);
    this._setupRedactorSettings(options);

    this.$().redactor(options);

    this.addObserver('value', this, this._valueDidChange);
    this._valueDidChange();
  }),

  _setupRedactorCallbacks: function(options) {
    Ember.EnumerableUtils.forEach(this.get('redactorCallbacks'), function(name) {
      options[name] = Ember.run.bind(this, name);
    }, this);
  },

  _setupRedactorSettings: function(options) {
    Ember.EnumerableUtils.forEach(this.get('redactorSettings'), function(key) {
      if (key in this) {
        options[key] = this.get(key);
      }
    }, this);

    // By default, Redactor indents HTML when `code.get` is called. This is
    // a problem because `valueDidChange` will then always call `code.set`,
    // which resets the cursor position.
    options.tabifier = false;
  },

  _updateRedactorCode: function() {
    var value = this.get('value');
    var $elem = this.$();

    if (value && value !== $elem.redactor('code.get')) {
      $elem.redactor('code.set', value);
    }
  },

  _valueDidChange: function() {
    Ember.run.scheduleOnce('afterRender', this, this._updateRedactorCode);
  }
});
