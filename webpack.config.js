var path = require('path');
var paths = require('./ionic.config').paths;


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
          "plugins": [
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
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/,
      /zone\.js\/dist\/zone-microtask/
    ]
  },
  resolve: {
    alias: {
      'ionic': 'ionic-framework',
      'web-animations.min': 'ionic-framework/js/web-animations.min',
    },
    extensions: ['', '.js', '.ts']
  }
};
