const gulp = require('gulp');
const runSequence = require('run-sequence');
const buildConfig = require('../config.js').main.build;

const sequence = ['cleanup'];
sequence.push(buildConfig.tasks);
sequence.push('connect');

gulp.task('build', () =>
  runSequence.apply(null, sequence)
);