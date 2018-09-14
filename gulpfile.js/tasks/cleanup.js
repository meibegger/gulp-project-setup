const gulp = require('gulp');
const del = require('del');
const cleanSpec = require('../config.js').tasks.cleanup;

gulp.task('cleanup', () => del(cleanSpec));
