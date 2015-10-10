'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./assets/app/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/build/css'));
});
