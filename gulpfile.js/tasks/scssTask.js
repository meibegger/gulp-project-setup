'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoPrefix = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');

const { tasks } = require('../config.js');
const spec = tasks.scss;

function scssTask(cb) {
  return gulp
    .src(`${spec.src}*.scss`)
    .pipe(gulpIf(spec.generateSourcemaps, sourcemaps.init()))
    .pipe(
      sass
        .sync({
          outputStyle: 'compressed',
          includePaths: ['./node_modules'],
        })
        .on('error', sass.logError)
    )
    .pipe(autoPrefix())
    .pipe(gulpIf(spec.generateSourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(spec.dest));
  cb(); // ?
}

exports.scssTask = scssTask;
