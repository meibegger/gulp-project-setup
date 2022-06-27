const SRC_DIR_ASSETS = 'src/assets/';
const SRC_DIR_VIEWS = 'src/views/';
const SRC_DIRS = {
  scss: `${SRC_DIR_ASSETS}scss/`,
};

const DEST_DIR = 'temp/';
const DEST_DIR_ASSETS = `${DEST_DIR}assets/`;
const DEST_DIRS = {
  scss: `${DEST_DIR_ASSETS}scss/`,
};

const tasks = {
  scss: {
    src: SRC_DIRS.scss,
    dest: DEST_DIRS.scss,
    generateSourcemaps: true, // todo only for watch
  },
};

exports.tasks = tasks;
