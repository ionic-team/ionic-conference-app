
module.exports = {
  proxies: null,

  // hooks execute before or after all project-related Ionic commands
  // (so not for start, docs, but serve, run, etc.) and take in the arguments
  // passed to the command as a parameter
  //
  // The format is 'before' or 'after' + commandName (uppercased)
  // ex: beforeServe, afterRun, beforePrepare, etc.
  hooks: {
    beforeServe: function(argv) {
      var spawn = require('child_process').spawn;
      var gulpWatch = spawn('gulp', ['watch']);
      gulpWatch.stdout.on('data', function(data) {
        console.log(data.toString());
      });
      gulpWatch.stderr.on('data', function(data) {
        console.log('gulp watch error: ' + data.toString());
      });
    }
  },

  paths: {
    wwwDir: 'www',
    buildDir: 'build',
    buildJSDir: 'js',
    buildCSSDir: 'css',
    buildFontsDir: 'fonts',
    appDir: 'app',
    appSrcModule: 'app.js',
    appBuildBundle: 'app.bundle.js',
    appSassSrc: ['app.ios.scss', 'app.md.scss'],
    appSassWatch: '**/*.scss',
    ionicDir: 'node_modules/ionic-framework',
    ionicSassDir: 'node_modules/ionic-framework',
    ionicFontFiles: 'fonts/**/*.ttf'
  },

  autoPrefixerOpts: {
    browsers: [
      'last 2 versions',
      'iOS >= 7',
      'Android >= 4',
      'Explorer >= 10',
      'ExplorerMobile >= 11'
    ],
    cascade: false
  }

};
