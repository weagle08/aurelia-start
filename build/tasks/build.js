/**
 * Created by ben on 8/24/2015.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var less = require('gulp-less');
var paths = require('../paths');
var compileOptions = require('../babel-options');

gulp.task('build-view-models', function(){
	return gulp.src(paths.viewModels)
		.pipe(plumber())
		.pipe(changed(paths.output.vvm, {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(babel(compileOptions))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.output.vvm));
});

gulp.task('build-views', function(){
	return gulp.src(paths.views)
		.pipe(changed(paths.output.vvm, {extension: '.html'}))
		.pipe(gulp.dest(paths.output.vvm));
});

gulp.task('build-main', function(){
	return gulp.src(paths.main)
		.pipe(changed(paths.output.root, {extension: '.html'}))
		.pipe(gulp.dest(paths.output.root));
});

gulp.task('build-sass', function(){
	return gulp.src(paths.styles.sass)
		.pipe(changed(paths.output.styles, {extension: '.sass'}))
		.pipe(sass())
		.pipe(gulp.dest(paths.output.styles))
});

gulp.task('build-less', function(){
	return gulp.src(paths.styles.less)
		.pipe(changed(paths.output.styles, {extension: '.less'}))
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.output.styles));
});

gulp.task('build-css', function(){
	return gulp.src(paths.styles.css)
		.pipe(changed(paths.output.styles, {extension: '.css'}))
		.pipe(gulp.dest(paths.output.styles));
});

gulp.task('move-config', function(){
	return gulp.src(paths.scripts.config)
		.pipe(changed(paths.output.root, {extension: '.js'}))
		.pipe(gulp.dest(paths.output.root));
});

gulp.task('build', function(callback){
	return runSequence(
		'clean',
		['build-view-models', 'build-views', 'build-main', 'build-sass', 'build-less', 'build-css', 'move-config'],
		callback
	);
});

gulp.task('default', ['build']);