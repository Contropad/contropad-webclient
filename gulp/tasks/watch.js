'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', function() {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.views.watch, ['views']);

});
