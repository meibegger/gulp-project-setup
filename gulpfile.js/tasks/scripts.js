const gulp = require('gulp');
const scriptSpec = require('../config.js').tasks.scripts;
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const es = require('event-stream');
const rename = require('gulp-rename')

const presets = ['@babel/preset-env'];
if (scriptSpec.minify) {
  presets.push('minify');
}

gulp.task('scripts', function () {
  const tasks = Object.entries(scriptSpec.entries).map(([entryFile, destName]) => {
    const entry = scriptSpec.srcDir + entryFile
    return browserify({
      entries: entry,
      debug: scriptSpec.generateSourcemaps,
    })
      .transform('babelify', {
        // uncomment the next line, if you also need to transform external packages (node modules)
        // global: true,
        // uncomment (and edit) the next line to limit the transformation of external packages (performance!)
        // ignore: /\/node_modules\/(?!bootstrap\/)/, // ?! will match if the given suffix is absent
        presets: presets,
        comments: false,
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-transform-async-to-generator',
        ],
      })
      .bundle()
      .on('error', function(err) { console.error('JS ERROR', err); this.emit('end'); })
      .pipe(source(entry))
      .pipe(rename({
        dirname: '',
        basename: destName,
      }))
      // .pipe(buffer())
      .pipe(gulp.dest(scriptSpec.destDir))
      .on('end', function(){ gutil.log('finished bundling ...'); });
  })
  // create a merged stream
  return es.merge.apply(null, tasks);
});