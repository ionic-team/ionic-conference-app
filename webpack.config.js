var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    'web-animations.min',
    path.normalize('zone.js/dist/zone-microtask'),
    path.resolve('app/app')
  ],
  output: {
    path: path.resolve('www/build/js'),
    filename: 'app.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [
            "angular2-annotations",
            "transform-decorators-legacy",
            "transform-class-properties",
            "transform-flow-strip-types"
          ],
          presets: ['es2015']
        },
        include: path.resolve('app'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: path.resolve('node_modules/angular2'),
        loader: 'strip-sourcemap'
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /web-animations/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  resolve: {
    alias: {
      'ionic': 'ionic-framework',
      'web-animations.min': path.normalize('ionic-framework/js/web-animations.min')
    },
    extensions: ['', '.js']
  }
};
