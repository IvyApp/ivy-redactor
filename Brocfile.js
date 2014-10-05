var distES6 = require('broccoli-dist-es6-module');

module.exports = distES6('lib', {
  global: 'ivy.redactor',
  packageName: 'ivy-redactor',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});
