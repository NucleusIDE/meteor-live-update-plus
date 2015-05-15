/**
 * Extends LiveUpdate with CSS support and transpiling SASS/LESS and Coffeescript
 */
var cssHandler = function(options) {
  CssUpdate.update(options.filepath, options.newContent);
};

LiveUpdate.addFileHandler('css', cssHandler);
LiveUpdate.addFileHandler('less', cssHandler);
LiveUpdate.addFileHandler('sass', cssHandler);
