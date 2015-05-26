import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ivy-redactor', {
  unit: true
});

test('should update Redactor when value property is changed', function(assert) {
  var component = this.subject({ tabifier: false });
  this.render();

  Ember.run(function() {
    component.set('value', '<p>abc</p>');
  });

  return new Ember.RSVP.Promise(function(resolve) {
    // Redactor's `code.sync` method introduces a 10ms delay, so we wait for
    // 50ms here just to be safe.
    setTimeout(resolve, 50);
  }).then(function() {
    assert.equal(component.$().redactor('code.get'), '<p>abc</p>', 'value is updated');
  });
});

test('should update value property when Redactor changes', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function() {
    // Simulate Redactor firing a `change` event.
    component.$().redactor('core.setCallback', 'change', '<p>abc</p>');
  });

  assert.equal(component.get('value'), '<p>abc</p>', 'value is updated');
});

test('should tear down Redactor without throwing an exception', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(component, 'destroy');
  assert.ok(true, 'no exception was thrown while tearing down Redactor');
});

function optionTest(key, value) {
  test('should set Redactor ' + key + ' option', function(assert) {
    var props = {};
    props[key] = value;
    var component = this.subject(props);
    this.render();

    var redactor = component.$().redactor('core.getObject');
    assert.deepEqual(redactor.opts[key], value, 'value of ' + key + ' option is correct');
  });
}

optionTest('activeButtons', ['italic', 'bold']);
optionTest('activeButtonsStates', { b: 'bold' });
optionTest('allowedAttr', [['p', 'class']]);
optionTest('allowedTags', ['p']);
optionTest('buttonSource', true);
optionTest('buttons', ['formatting']);
optionTest('buttonsHide', ['image', 'link']);
optionTest('buttonsHideOnMobile', ['image', 'video']);
optionTest('cleanOnPaste', false);
optionTest('cleanSpaces', false);
optionTest('cleanStyleOnEnter', true);
optionTest('convertImagesLinks', true);
optionTest('convertLinks', false);
optionTest('convertUrlLinks', false);
optionTest('convertVideoLinks', false);
optionTest('deniedTags', ['html']);
optionTest('formatting', ['p', 'blockquote']);
optionTest('formattingAdd', [{ tag: 'p', title: 'Red Block', 'class': 'red' }]);
optionTest('linebreaks', true);
optionTest('linkNofollow', true);
optionTest('linkProtocol', 'https');
optionTest('linkSize', 80);
optionTest('linkTooltip', false);
optionTest('maxHeight', 500);
optionTest('minHeight', 500);
optionTest('paragraphize', false);
optionTest('pastePlainText', true);
optionTest('placeholder', 'Your text here...');
optionTest('preSpaces', 2);
optionTest('removeComments', true);
optionTest('removeDataAttr', true);
optionTest('removeEmpty', ['a']);
optionTest('replaceDivs', false);
optionTest('replaceStyles', [['font-weight:\\s?bold', 'b']]);
optionTest('replaceTags', [['b', 'strong']]);
optionTest('shortcuts', false);
optionTest('tabAsSpaces', 2);
optionTest('tabindex', 2);
optionTest('toolbar', false);
optionTest('toolbarExternal', '#your-toolbar-layer-id');
optionTest('toolbarFixed', false);
optionTest('toolbarFixedTarget', '#my-parent-layer');
optionTest('toolbarOverflow', true);

function optionDefaultTest(key, defaultValue) {
  test('should have correct default for ' + key + ' option', function(assert) {
    var component = this.subject();
    this.render();

    var redactor = component.$().redactor('core.getObject');
    assert.deepEqual(redactor.opts[key], defaultValue, 'default value of ' + key + ' option is correct');
  });
}

optionDefaultTest('activeButtons', ['deleted', 'italic', 'bold', 'underline', 'unorderedlist', 'orderedlist', 'alignleft', 'aligncenter', 'alignright', 'justify']);
optionDefaultTest('activeButtonsStates', { b: 'bold', strong: 'bold', i: 'italic', em: 'italic', del: 'deleted', strike: 'deleted', ul: 'unorderedlist', ol: 'orderedlist', u: 'underline' });
optionDefaultTest('allowedAttr', false);
optionDefaultTest('allowedTags', false);
optionDefaultTest('buttonSource', false);
optionDefaultTest('buttons', ['formatting', 'bold', 'italic', 'deleted', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'image', 'file', 'link', 'alignment', 'horizontalrule']);
optionDefaultTest('buttonsHide', []);
optionDefaultTest('buttonsHideOnMobile', []);
optionDefaultTest('cleanOnPaste', true);
optionDefaultTest('cleanSpaces', true);
optionDefaultTest('cleanStyleOnEnter', false);
optionDefaultTest('convertImagesLinks', undefined);
optionDefaultTest('convertLinks', true);
optionDefaultTest('convertUrlLinks', true);
optionDefaultTest('convertVideoLinks', true);
optionDefaultTest('deniedTags', ['html', 'head', 'link', 'body', 'meta', 'script', 'style', 'applet']);
optionDefaultTest('formatting', ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
optionDefaultTest('formattingAdd', false);
optionDefaultTest('linebreaks', false);
optionDefaultTest('linkNofollow', false);
optionDefaultTest('linkProtocol', 'http');
optionDefaultTest('linkSize', 50);
optionDefaultTest('linkTooltip', true);
optionDefaultTest('maxHeight', false);
optionDefaultTest('minHeight', false);
optionDefaultTest('paragraphize', true);
optionDefaultTest('pastePlainText', false);
optionDefaultTest('placeholder', false);
optionDefaultTest('preSpaces', 4);
optionDefaultTest('removeComments', false);
optionDefaultTest('removeDataAttr', false);
optionDefaultTest('removeEmpty', ['p']);
optionDefaultTest('replaceDivs', true);
optionDefaultTest('replaceStyles', [['font-weight:\\s?bold', 'strong'], ['font-style:\\s?italic', 'em'], ['text-decoration:\\s?underline', 'u'], ['text-decoration:\\s?line-through', 'del']]);
optionDefaultTest('replaceTags', [['strike', 'del']]);
optionDefaultTest('shortcutsAdd', false);
optionDefaultTest('tabAsSpaces', false);
optionDefaultTest('tabindex', false);
optionDefaultTest('toolbarExternal', false);
optionDefaultTest('toolbarFixed', true);
optionDefaultTest('toolbarFixedTarget', document);
optionDefaultTest('toolbarOverflow', false);
