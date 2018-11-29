const argv = require('yargs').argv;

const mainTask = argv._[0];
const watchApp = mainTask === 'watch';
const compileApp = watchApp || mainTask === 'build';
const watchJSDoc = (mainTask === 'watch' && argv.doc) || mainTask === 'doc';
const compileJSDoc = watchJSDoc || mainTask === 'build';
const livereload = (watchApp || watchJSDoc) && !argv.static;
const generateSourcemaps = watchApp;

module.exports = argv;
module.exports.compileApp = compileApp;
module.exports.watchApp = watchApp;
module.exports.compileJSDoc = compileJSDoc;
module.exports.watchJSDoc = watchJSDoc;
module.exports.startAppServer = watchApp || (argv.connect && compileApp);
module.exports.startJSDocServer = watchJSDoc || (argv.connect && compileJSDoc);
module.exports.livereload = livereload;
module.exports.minify = mainTask === 'build';
module.exports.generateSourcemaps = generateSourcemaps;
