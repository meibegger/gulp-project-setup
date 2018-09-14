const requireDir = require('require-dir');

// Register all tasks in gulpfile.js/tasks (including subfolders)
requireDir('./tasks', { recurse: true });
