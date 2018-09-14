/**
 * Configuration of the Gulp tasks
 */

const args = require('./utils/args.js');

/*
 * Settings used in the exported config
 */
const srcDirs = {
  images: "src/assets/img/",
  scss: "src/assets/scss/",
  es6: "src/assets/js/",
  views: "src/views/",
};
const destDir = "dist/";
const destDirs = {
  images: destDir + "img/",
  scss: destDir + "css/",
  es6: destDir + "js/",
  views: destDir,
  docs: "docs/",
};
const serverRoot = destDir;
const basePort = 8000;

/*
 * Configuration of the tasks
 */

/**
 * which servers to start
 * @type {Array}
 */
const servers = [];
if (args.startAppServer) {
  servers.push({
    root: serverRoot,
    basePort: basePort,
    livereload: args.livereload,
    name: "WebApp Server",
  })
}
if (args.startJSDocServer) {
  servers.push({
    root: destDirs.docs,
    basePort: basePort + 2,
    livereload: args.livereload,
    name: "JSDoc Server",
  })
}

/**
 * which files to delete before recompiling
 * @type {Array}
 */
const cleanup = [];
if (args.compileApp) {
  cleanup.push(destDir + "**/*");
}
if (args.compileJSDoc) {
  cleanup.push(destDirs.docs + "**/*");
}

/**
 * which files to watch and their associated tasks
 */
const watchTasks = []
if (args.watchApp) {
  watchTasks.push(
    {
      files: [
        srcDirs.views + "**/*",
      ],
      tasks: ["copy"],
    },
    {
      files: [
        srcDirs.images + "**/*",
      ],
      tasks: ["images"],
    },
    {
      files: [
        srcDirs.scss + "**/*"
      ],
      tasks: ["scss"],
    },
    {
      files: [
        srcDirs.es6 + "**/*",
      ],
      tasks: args.watchJSDoc ? ["scripts", "doc"] : ["scripts"],
    }
  );
} else if (args.watchJSDoc) {
  watchTasks.push(
    {
      files: [
        srcDirs.es6 + "**/*",
      ],
      tasks: ["doc"],
    }
  );
}

module.exports = {
  tasks: {
    connect: servers,
    /**
     * which files are deleted before a new transpile
     */
    cleanup: cleanup,
    /**
     * which files to copy
     */
    copy: [
      {
        src: [
          srcDirs.views + "**/*",
        ],
        dest: destDirs.views,
      },
    ],
    /**
     * ES6 settings
     */
    scripts: {
      entry: "index.js",
      entryDir: srcDirs.es6,
      destDir: "dist/js/",
      generateSourcemaps: args.generateSourcemaps,
      minify: args.minify,
    },
    /**
     * image settings
     */
    images: {
      src: srcDirs.images + "**/*",
      dest: destDirs.images,
      quality: {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true,
      },
    },
    /**
     * SCSS settings
     */
    scss: {
      entry: [
        srcDirs.scss + "index.scss"
      ],
      dest: destDirs.scss,
      browsers : [
        "ie >= 9",
        "ie_mob >= 10",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 7",
        "opera >= 23",
        "ios >= 7",
        "android >= 4.4",
        "bb >= 10",
      ],
      generateSourcemaps: args.generateSourcemaps,
      minify: args.minify,
    },
    /**
     * JSDoc settings
     */
    doc: {
      src: srcDirs.es6,
      dest: destDirs.docs,
    },
  },
  main: {
    /**
     * Configure the watch-task
     */
    watch: {
      tasks: watchTasks,
    },
    /**
     * Configure the build-task
     */
    build: {
      tasks: [
        "copy",
        "scripts",
        "images",
        "scss",
        "doc"
      ],
    },
  }
};
