/* jshint node: true */
'use strict';

module.exports = {
  name: 'ivy-redactor',

  included: function(app) {
    app.import(app.bowerDirectory + '/polyfills-pkg/dist/polyfills-pkg.js');
  }
};
