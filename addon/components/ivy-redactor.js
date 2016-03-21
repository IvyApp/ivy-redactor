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
    'activeButtons',
    'activeButtonsStates',
    'allowedAttr',
    'allowedTags',
    'buttons',
    'buttonsHide',
    'buttonsHideOnMobile',
    'cleanOnPaste',
    'cleanSpaces',
    'cleanStyleOnEnter',
    'convertImagesLinks',
    'convertLinks',
    'convertUrlLinks',
    'convertVideoLinks',
    'deniedTags',
    'formatting',
    'formattingAdd',
    'linebreaks',
    'linkNofollow',
    'linkProtocol',
    'linkSize',
    'linkTooltip',
    'maxHeight',
    'minHeight',
    'paragraphize',
    'pastePlainText',
    'placeholder',
    'preSpaces',
    'removeComments',
    'removeDataAttr',
    'removeEmpty',
    'replaceDivs',
    'replaceStyles',
    'replaceTags',
    'shortcuts',
    'shortcutsAdd',
    'source',
    'tabAsSpaces',
    'tabindex',
    'toolbar',
    'toolbarExternal',
    'toolbarFixed',
    'toolbarFixedTarget',
    'toolbarOverflow'
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
    this.get('redactorCallbacks').forEach(function(name) {
      options[name] = Ember.run.bind(this, name);
    }, this);
  },

  _setupRedactorSettings: function(options) {
    this.get('redactorSettings').forEach(function(key) {
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
