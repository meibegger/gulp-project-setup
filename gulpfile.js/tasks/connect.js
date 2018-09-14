const gulp = require('gulp');
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const serverConfig = require('../config.js').tasks.connect;

gulp.task('connect', function() {
  serverConfig.forEach(config => {
    connect.server({
      livereload: config.livereload,
      root: config.root,
      port: config.basePort + (config.livereload ? 0 : 1),
      name: config.name || 'Server',
    });
    if (config.livereload) {
      watch(`${config.root}/**/*`).pipe(connect.reload());
    }
  });
});
