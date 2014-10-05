import Component from './component';

export default {
  name: 'ivy-redactor',

  initialize: function(container) {
    container.register('component:ivy-redactor', Component);
  }
};
