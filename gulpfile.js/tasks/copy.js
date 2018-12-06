const gulp = require('gulp');
const copySpecs = require('../config.js').tasks.copy;

gulp.task('copy', () =>
  copySpecs.forEach(copySpec =>
    gulp
      .src(copySpec.src, { dot: true })
      .pipe(gulp.dest(copySpec.dest))
  )
);