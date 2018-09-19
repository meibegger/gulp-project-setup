const gulp = require('gulp');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const prefix = require('gulp-autoprefixer');
const scssSpec = require('../config.js').tasks.scss;
const gulpif = require('gulp-if');

gulp.task('scss', function () {
  return gulp.src(scssSpec.entry)
    .pipe(gulpif(scssSpec.generateSourcemaps, sourcemaps.init()))
    .pipe(scss({
      "includePaths": [
        "./node_modules"
      ],
      outputStyle: scssSpec.minify ? 'compressed' : 'expanded',
    }).on('error', scss.logError))
    .pipe(prefix(scssSpec.browsers))
    .pipe(gulpif(scssSpec.generateSourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(scssSpec.dest));
});