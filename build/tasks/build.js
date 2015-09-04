/**
 * Created by ben on 8/24/2015.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compileOptions = require('../babel-options');

gulp.task('build-view-models', function(){
	return gulp.src(paths.viewModels)
		.pipe(plumber())
		.pipe(changed(paths.output.viewModels, {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(babel(compileOptions))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.output.viewModels));
});

gulp.task('build-views', function(){
	
});

gulp.task('build-sass', function(){
	
});

gulp.task('build-css', function(){
	
});

gulp.task('build', function(callback){
	return runSequence(
		'clean',
		['build-view-models', 'build-views', 'build-sass', 'build-css'],
		callback
	);
});

gulp.task('default', ['build']);