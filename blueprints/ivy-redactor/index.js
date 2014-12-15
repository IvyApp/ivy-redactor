/* jshint node:true */

module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('polyfills-pkg');
  },

  normalizeEntityName: function() {
  }
};
