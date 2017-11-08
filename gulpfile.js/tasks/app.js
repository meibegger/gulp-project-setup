const gulp = require('gulp');
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const serverConfig = require('../config.json').options.server;

gulp.task('app', ['build'], function() {
  connect.server({
    livereload: false,
    root: serverConfig.root,
    port: serverConfig.basePort
  });
});