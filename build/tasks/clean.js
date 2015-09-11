var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([paths.output.vvm, paths.output.root + 'index.html', paths.output.root + 'config.js', paths.output.styles])
    .pipe(vinylPaths(del));
});