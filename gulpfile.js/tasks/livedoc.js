const gulp = require('gulp');
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const docSpec = require('../config.json').options.doc;

gulp.task('livedoc', ['doc'], function() {
  connect.server({
    livereload: docSpec.server.livereload,
    root: docSpec.dest,
    port: docSpec.server.port
  });
  watch(`${docSpec.dest}/**/*`).pipe(connect.reload());

  gulp.watch(`${docSpec.src}/**/*`, ['update-doc']);

});