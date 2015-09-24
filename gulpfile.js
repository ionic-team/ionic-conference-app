/******************************************************************************
 * Gulpfile
 * Be sure to run `npm install` for `gulp` and the following tasks to be
 * available from the command line. All tasks are run using `gulp taskName`.
 ******************************************************************************/

// node module imports
var gulp = require('gulp'),
    webpack = require('webpack'),
    minimist = require('minimist'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


var IONIC_DIR = "node_modules/ionic-framework/"
//var IONIC_DIR = "node_modules/ionic2/dist/"


/******************************************************************************
 * watch
 * Build the app, and rebuild when source files change.
 * Also starts a local web server.
 ******************************************************************************/
gulp.task('watch', ['sass', 'fonts'], function(done) {
  watch('www/app/**/*.scss', function(){
    gulp.start('sass');
  });
  compile(true, function(){
    gulp.start('serve');
    done();
  });
});


/******************************************************************************
 * build
 * Build the app once, without watching for source file changes.
 ******************************************************************************/
gulp.task('build', ['sass', 'fonts'], function(done) {
  compile(false, done);
});


/******************************************************************************
 * serve
 * Start a local web server serving the 'www' directory.
 * The default is http://localhost:8100. Use the optional '--port'
 * flag to specify a different port.
 ******************************************************************************/
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'www',
    },
    port: flags.port,
    files: [
      'www/**/*.html'
    ],
    notify: false
  });
});


/******************************************************************************
 * sass
 * Convert Sass files to a single bundled CSS file. Uses auto-prefixer
 * to automatically add required vendor prefixes when needed.
 ******************************************************************************/
gulp.task('sass', function(){
  var autoprefixerOpts = {
    browsers: [
      'last 2 versions',
      'iOS >= 7',
      'Android >= 4',
      'Explorer >= 10',
      'ExplorerMobile >= 11'
    ],
    cascade: false
  };

  return gulp.src('www/app/app.scss')
    .pipe(sass({
      includePaths: [IONIC_DIR + 'src/scss'],
    }))
    .on('error', function(err){
      console.error(err.message);
      this.emit('end');
    })
    .pipe(autoprefixer(autoprefixerOpts))
    .pipe(gulp.dest('www/build/css'))
    .pipe(reload({ stream: true }));
});


/******************************************************************************
 * fonts
 * Copy Ionic font files to build directory.
 ******************************************************************************/
gulp.task('fonts', function() {
  return gulp.src([
      IONIC_DIR + 'fonts/**/*.ttf',
      IONIC_DIR + 'fonts/**/*.woff'
    ])
    .pipe(gulp.dest('www/build/fonts'));
});


/******************************************************************************
 * clean
 * Delete previous build files.
 ******************************************************************************/
gulp.task('clean', function(done) {
  var del = require('del');
  del(['www/build'], done);
});



/******************************************************************************
 * Compile
 ******************************************************************************/
function compile(watch, cb) {
  // prevent gulp calling done callback more than once when watching
  var firstTime = true;

  // load webpack config
  var config = require('./webpack.config.js');

  // https://github.com/webpack/docs/wiki/node.js-api#statstojsonoptions
  var statsOptions = {
    'colors': true,
    'modules': true,
    'chunks': false,
    'exclude': ['node_modules']
  }

  // run (one time compile) or watch
  // https://github.com/webpack/docs/wiki/node.js-api
  var compilerFunc = (watch ? 'watch' : 'run');
  var compilerFuncArgs = [compileHandler];
  watch && compilerFuncArgs.unshift(null); // watch takes config obj as first arg

  // Call compiler.run(compileHandler) or compiler.watch(null, compileHandler)
  var compiler = webpack(config);
  compiler[compilerFunc].apply(compiler, compilerFuncArgs);

  function compileHandler(err, stats){
    if (firstTime) {
      firstTime = false;
      cb();
    } else {
      reload();
    }

    // print build stats and errors
    console.log(stats.toString(statsOptions));
  }
}


// command line flag config
var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};
var flags = minimist(process.argv.slice(2), flagConfig);
