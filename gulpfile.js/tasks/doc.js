const gulp = require('gulp');
const child_exec = require('child_process').exec;
const del = require('del');
const runSequence = require('run-sequence');
const docSpec = require('../config.json').options.doc;

function updateDoc(done) {
  child_exec(`node ./node_modules/jsdoc/jsdoc.js ${docSpec.src} -c ./jsdoc.json -d ${docSpec.dest}`, undefined, done)
}

gulp.task('clean-doc', () =>
  del(`${docSpec.dest}/*`)
);

gulp.task('update-doc', updateDoc);

gulp.task('doc', ['clean-doc'], updateDoc);

