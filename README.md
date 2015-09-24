# Ionic 2 Starter: Developer Preview

**Note (9/15/15): this is not ready to be used yet! We are fixing a number of issues for a release at the end of September. Many things do not work but we are making the repo public to make it easier for us to finish development on Ionic CLI, etc.**

This is a simple developer preview of an Ionic 2 starter project, the next generation of [Ionic](http://ionicframework.com/). Ionic is an open-source mobile app development SDK that makes it easy to build top quality mobile apps with web technologies.

Ionic 2 is based on the new [2.x version of AngularJS](https://angular.io/), and comes with many significant performance, usability, and feature improvements.


## Getting Started

1. Clone repo
2. `npm install`
3. `gulp watch`

The `gulp watch` task will build Ionic2, which may take a few moments for the initial build. After the files have finished building, a browser will open with the Ionic2 starter app. Any source file changes will rebuild the app and live reload the page. Also be sure to emulate the app in iOS and Android devices ([Chrome Screen Emulation](https://developer.chrome.com/devtools/docs/device-mode#screen-emulator)).

#### Notes:
- To develop against the ionic2 master branch (or any commit/release/tag), you'll need to do the following:
```bash
# you can install from either a local ionic2 or from github
# use ~/git/ionic2#commit for a specific commit

# npm install driftyco/ionic2  #github
$ npm install ~/git/ionic2  #local
$ cd node_modules/ionic2 && npm install
$ gulp src
```
And then update your [`webpack.config.js`](https://github.com/driftyco/ionic2-starter/blob/master/webpack.config.js#L32) file:
```js
resolve: {
  modulesDirectories: [
    "node_modules",
  //"node_modules/ionic-framework/src/es5/common"
    "node_modules/ionic2/dist/src/es5/common"
  ]
}
```
As well as your [`gulpfile.js`](https://github.com/driftyco/ionic2-starter/blob/master/gulpfile.js#L19):
```js
//var IONIC_DIR = "node_modules/ionic-framework/"
var IONIC_DIR = "node_modules/ionic2/dist/"
```


__* Ionic 2 will be integrated within the [Ionic CLI](https://www.npmjs.com/package/ionic), [Ionic Lab](http://lab.ionic.io/), [Ionic Creator](http://creator.ionic.io/) (basically every Ionic tool), to make building an Ionic app even easier.__

## Things to keep in mind

Ionic 2 is alpha, and so is Angular 2. There are number of things being actively worked on that aren't quite ready yet. Here are some things to keep in mind as you try out Ionic 2 and Angular 2:

### Missing Ionic 1 features

We are currently working on completing a few core Ionic 1 features:

- Collection repeat (known as Virtual Scrolling in v2) is not quite ready
- Popup is half-baked


### Current Angular 2 known issues:

- Angular 2 is still in alpha and is not production ready
- Angular team has first focused on developing what the core of Angular 2 "is"
- Angular 2 filesize has not been optimized for minification yet
- Angular 2 bootstrap time has not been optimized yet
- As Angular 2 reaches beta there will be significant performance improvements


### ES6/Typescript

- Ionic's source is written using [Typescript](http://www.typescriptlang.org/)
- Ionic apps can be written in ES6 or TypeScript
- Typescript is an optional feature to be used at the developers discretion
- Ionic 2 starters come with the necessary build tools to transpile both ES6 and Typescript


### CSS Attribute Selectors:

- Simple
- Smaller markup
- Easier to read and understand
- [Not an issue](https://twitter.com/paul_irish/status/311610425617838081) for today's mobile browsers
- No performance impacts have been found


### Distribution

 - [npm: ionic-framework](https://www.npmjs.com/package/ionic-framework)


#### Webpack

- Starter project is already setup to build Ionic using [Webpack](http://webpack.github.io/)
