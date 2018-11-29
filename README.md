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
$ gulp watch [--doc] [--static]
```
Watch the app source files and generate the app. The JS and CSS are minified and sourcemaps are generated. 
Additionally a web-server with live-reload is started. 

Optionally 
- generate the JSDoc (a web-server for the docs is also started).
- prevent live-reload

#### Options
**--doc**
Add this option to also generate the JSDoc

**--static**
Add this option to prevent live-reload

#### Examples
```
// Live-generate the app and start a web-server with live-reload
$ gulp watch

// Live-generate the app and JSDoc and start a web-server for each with live-reload
$ gulp watch --doc

// Live-generate the app and start a web-server (without live-reload)
$ gulp watch --static

// Live-generate the app and JSDoc and start a web-server for each (without live-reload)
$ gulp watch --doc --static
```

### Only watch the JSDocs
```
$ gulp doc [--static]
```
Watch the JS source files and generate the JSDoc. 
Additionally a web-server with live-reload is started. 

#### Options
**--static**
Add this option to prevent live-reload

#### Examples
```
// Live-generate the JSDoc and start a web-server with live-reload
$ gulp doc

// Live-generate the JSDoc and start a web-server (without live-reload)
$ gulp doc --static
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
