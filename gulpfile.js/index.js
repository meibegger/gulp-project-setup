'use strict';

const { series } = require('gulp');
const { scssTask } = require('./tasks/scssTask.js');

exports.default = series(scssTask);
