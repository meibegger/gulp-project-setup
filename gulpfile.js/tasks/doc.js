const gulp = require('gulp');
const child_exec = require('child_process').exec;
const docSpec = require('../config.js').tasks.doc;

gulp.task('doc', function(done) {
  child_exec(`node ./node_modules/jsdoc/jsdoc.js ${docSpec.src} -c ./jsdoc.json -d ${docSpec.dest}`, undefined, done);
});
