const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const imageSpec = require('../config.js').tasks.images;

gulp.task('images', () =>
  gulp.src(imageSpec.src)
    .pipe(cache(imagemin(imageSpec.quality)))
    .pipe(gulp.dest(imageSpec.dest))
);

