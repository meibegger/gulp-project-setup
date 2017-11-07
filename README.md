# Gulp Project Setup

The files in this repo are intended to give you a simpler, more flexible framework for the Project, than the webpack environment, used in the AK.

## Introduction
The structure of the project source is the same as in the AK.

Differences:
- all files in `src/views` are copied to the `dist` folder
- images from `src/assets/img` are optimized and saved in `dist/img`
- the css and js files have to be included in the html template (see the example in `src/views/index.html`)

The files are compiled and transferred to the `dist` folder using gulp (https://gulpjs.com/). 
The gulp setup is located in the `gulpfile.js` folder. All configuration can be done in `gulpfile.js.config.js`.

## Install
Install gulp globally ...
```
$ npm install gulp -g
```
... and install the project setup
```
$ npm install
```

## Project Files
The distribution files are generated in the `/dist` folder.

### Start the server
Run ...
```
$ gulp connect
```
... and open **`http://localhost:8000`** in your browser.

The files are watched and the browser is updated automatically on-change of the files.

### Build the project
To only build the project without starting a watcher and server, run
```
$ gulp build
``` 
(This will also generate the JSDoc documentation)

## Documentation
The documentation is generated in the `/docs` folder.

### Start the server
There is a separate server for the documentation. To start it, run ...
```
$ gulp livedoc
```
... and open **`http://localhost:8001`** in your browser.

The files are watched and the browser is updated automatically on-change of the files.

### Generate the documentation
To only generate the JSDoc documentation without starting a watcher and server, run
```
$ gulp doc
```