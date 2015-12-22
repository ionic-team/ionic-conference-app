var path = require('path');
var paths = require('./ionic.config').paths;
var webpack = require('webpack');


module.exports = {
  entry: [
    'es6-shim/es6-shim.min',
    'zone.js/dist/zone-microtask',
    'reflect-metadata',
    'web-animations.min',
    './app/app'
  ],
  output: {
    path: path.join(__dirname, paths.wwwDir, paths.buildDir, paths.buildJSDir),
    filename: paths.appBundle,
    publicPath: path.join(paths.buildDir, paths.buildJSDir),
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
        include: [path.join(__dirname, paths.appDir)],
        exclude: /node_modules/
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /web-animations/,
      /zone\.js\/dist\/zone-microtask/
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     properties: true,
    //     sequences: true,
    //     dead_code: true,
    //     conditionals: true,
    //     comparisons: true,
    //     evaluate: true,
    //     booleans: true,
    //     unused: true,
    //     loops: true,
    //     hoist_funs: true,
    //     cascade: true,
    //     if_return: true,
    //     join_vars: true,
    //     //drop_console: true,
    //     drop_debugger: true,
    //     unsafe: true,
    //     hoist_vars: true,
    //     negate_iife: true,
    //     //side_effects: true
    //   },
    //   output: {
    //     comments: false
    //   },
    //   verbose: true,
    //   beautify: false,
    //   quote_style: 3
    // })
  ],
  resolve: {
    alias: {
      'ionic': 'ionic-framework',
      'web-animations.min': 'ionic-framework/js/web-animations.min',
    },
    extensions: ['', '.js']
  }
};
