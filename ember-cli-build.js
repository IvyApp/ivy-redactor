/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import({
    development: 'bower_components/bootstrap/dist/css/bootstrap.css',
    production: 'bower_components/bootstrap/dist/css/bootstrap.min.css'
  });
  app.import({
    development: 'bower_components/bootstrap/dist/css/bootstrap.css.map',
    production: 'bower_components/bootstrap/dist/css/bootstrap.min.css.map'
  });
  app.import('vendor/redactor/redactor-font.eot');
  app.import('vendor/redactor/redactor.css');
  app.import('vendor/redactor/redactor.js');

  return app.toTree();
};
