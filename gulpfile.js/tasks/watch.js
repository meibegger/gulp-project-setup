const gulp = require('gulp');
const runSequence = require('run-sequence');
const watchConfig = require('../config.js').main.watch;

const sequence = ['cleanup'];
sequence.push(watchConfig.tasks.reduce((tasks, spec) => {
  tasks = tasks.concat(spec.tasks);
  return tasks;
}, watchConfig.start || []));
sequence.push('connect');

gulp.task('watch', () => {
  runSequence.apply(null, sequence);
  watchConfig.tasks.forEach(spec =>
    gulp.watch(spec.files, spec.tasks)
  )
});
