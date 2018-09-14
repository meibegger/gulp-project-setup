const gulp = require('gulp');
const scriptSpec = require('../config.js').tasks.scripts;
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');

const presets = ['@babel/preset-env'];
if (scriptSpec.minify) {
  presets.push('minify');
}

gulp.task('scripts', function () {
  browserify({
    entries: scriptSpec.entryDir + scriptSpec.entry,
    debug: scriptSpec.generateSourcemaps,
  })
    .transform('babelify', {
      global: true,
      presets: presets,
      comments: false,
    })
    .bundle()
    .on('error', function(err) { console.error('JS ERROR', err); this.emit('end'); })
    .pipe(source(scriptSpec.entry))
    .pipe(buffer())
    .pipe(gulp.dest(scriptSpec.destDir))
    .on('end', function(){ gutil.log('finished bundling ...'); });
});