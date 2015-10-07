var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

gulp.task('build-libraries', function() {

    var libraries = [

    ];

    return gulp
        .src(libraries)
        .pipe(concat('libraries.js'))
        .pipe(gulp.dest('./public/build/js'));
});
