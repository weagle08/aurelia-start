/**
 * Created by ben on 8/24/2015.
 */
var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var ecma5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compileOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

gulp.task('build-view-models', function(){
    return gulp.src(paths.viewModels)
        .pipe(plumber())
        .pipe(changed(paths.output.viewModels, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(ecma5(assign({}, compileOptions, {modules: 'system'})))
        .pipe(gulp.dest(paths.output.viewModels));
});

gulp.task('build-views', function () {
    return gulp.src(paths.views)
        .pipe(changed(paths.output.views, {extension: '.html'}))
        .pipe(gulp.dest(paths.output.views));
});