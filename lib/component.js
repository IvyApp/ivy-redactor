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
    'activeButtons',
    'activeButtonsStates',
    'allowedAttr',
    'allowedTags',
    'buttonSource',
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

  destroyRedactor: function() {
    this.removeObserver('value', this, this.valueDidChange);

    this.$().redactor('destroy');
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
