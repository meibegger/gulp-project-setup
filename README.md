# Gulp Project Setup

The files in this repo are intended to give you a fast setup of a simple web-project using Gulp to build your files to a `dist` folder.

## Features
- Copy the HTML files
- Transpile ES6 to ES5 with Babel and pack everything with Browserify
- Transpile SCSS to CSS  and Autoprefix
- Minify CSS and JS and genarate sourcemaps
- Minify images
- Genarate a JSDoc Documentation
- Start a web-server with live-reload

## Project Structure
### Gulp tasks
The gulp setup is located in the `/gulpfile.js` folder. 

All available tasks can be found in `gulpfile.js/tasks` and are configured in `gulpfile.js/config.js`. This should make it easy to extend and customize the compilation-process for a given project.

The following documentation refers to the default config. 

### Source Files
The source files of your project live in the `/src` folder.

```
src
|-- assets
.   |-- img
.   |-- js
.   .   |-- index.js
.   |-- scss
.   .   |-- index.scss
|-- views
    |-- index.html
```

### Output
#### App
Your project is built to the `/dist` folder
```
dist
|-- css
.   |-- index.css
|-- img
|-- js
.   |-- index.js
|-- index.html
```

#### JSDoc
The JSDoc documentation is generated in the `/docs` folder.

## Getting started
Install Gulp globally (if you haven't done so yet) ...
```
$ npm install gulp -g
```
... and install the project dependencies
```
$ npm install
```

## Build and serve

### Watch the app
```
$ gulp watch [--doc] [--connect [live]]
```
Watch the app source files and generate the app. The JS and CSS are minified and sourcemaps are generated.

Optionally generate the JSDoc and start a web-server (with optional live reload).

#### Options
**--doc**
Add this option to also generate the JSDoc

**--connect**
Add this option to start a web-server for every required output (app and doc).
Set the `connect` option to `live` to livereload the browser on change

#### Examples
```
// Only generate the app
$ gulp watch

// Generate the app and the JSDoc
$ gulp watch --doc

// Generate the app and start a web-server
$ gulp watch --connect

// Generate the app and start a web-server with live-reload
$ gulp watch --connect live

// Generate the app and JSDoc and start a web-server for each
$ gulp watch --doc --connect

// Generate the app and JSDoc and start a web-server for each with live-reload
$ gulp watch --doc --connect live
```

### Only watch the JSDocs
```
$ gulp doc [--connect [live]]
```
Watch the JS source files and generate the JSDoc. Optionally start a web-server (with optional live reload).

#### Options
**--connect**
Add this option to start a web-server.
Set the `connect` option to `live` to livereload the browser on change

#### Examples
```
// Only generate the JSDoc
$ gulp doc

// Generate the JSDoc and start a web-server
$ gulp doc --connect

// Generate the JSDoc and start a web-server with live-reload
$ gulp watch --connect live
```

### Build the app for distribution
```
$ gulp build [--connect]
```
Generate the app with minified CSS and JS and without sourcemaps for performance reasons.

Optionally start a web-server to view the generated files.
 
#### Options
**--connect**
Add this option to start a web-server.

#### Examples
```
// Build the app and JSDoc
$ gulp build

// Build the app and JSDoc and start a web-server
$ gulp build --connect
```
