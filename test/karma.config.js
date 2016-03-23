// Karma configuration
// Generated on Wed Jul 15 2015 09:44:02 GMT+0200 (Romance Daylight Time)

module.exports = function(config) {
  'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/zone.js/dist/zone-microtask.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/traceur/bin/traceur.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',

      { pattern: 'test/ionic-angular.js', included: false, watched: false },
      { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/ionic-angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'www/build/test/**/*.js', included: false, watched: true },

      'test/test-main.js'
    ],

    // list of files to exclude
    exclude: [
      'node_modules/angular2/**/*_spec.js',
      'node_modules/ionic-angular/**/*spec*',
      'node_modules/ionic-angular/decorators/app.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/build/test/**/!(*.spec|*.stub).js': 'coverage',
    },

    // options on how to report coverage:
    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'lcov', dir: 'coverage', subdir: '.'}
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha','coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // GOTCHA -- Karma proxies _everything_ through base first..
    //           Also any files you want to serve need to be in the files array above with serverd: true
    proxies: {
      // allows us to keep test code separate from app code and still have the references work
      '/base/node_modules/ionic-angular/decorators/app.js': '/base/www/build/test/app.stub.js', // stub out Ionic's @App decorator
      '/base/ionic-angular.js': '/base/test/ionic-angular.js'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
    ],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  });

  if (process.env.APPVEYOR) {
    config.browsers = ['IE'];
    config.singleRun = true;
    config.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  }

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
  }
};
