/**
 * Extends LiveUpdate with CSS support and transpiling SASS/LESS and Coffeescript
 */

var _CssUpdate = new CssUpdate();

var cssHandler = function(options) {
  _CssUpdate.update(options.filepath, options.newContent);
};

LiveUpdate.addFileHandler('css', cssHandler);
LiveUpdate.addFileHandler('less', cssHandler);
LiveUpdate.addFileHandler('sass', cssHandler);
