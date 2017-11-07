const gulp = require('gulp');
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const serverConfig = require('../config.json').options.server;

gulp.task('connect', ['watch'], function() {
  connect.server({
    livereload: serverConfig.livereload,
    root: serverConfig.root,
    port: serverConfig.port
  });
  watch(`${serverConfig.root}/**/*`).pipe(connect.reload());
});