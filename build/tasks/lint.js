/**
 * Created by weagl on 9/4/2015.
 */
var gulp = require('gulp');
var paths = require('../paths');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function(){
    return gulp.src(paths.viewModels)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});