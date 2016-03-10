/******************************************************************************
 * Gulpfile
 * Be sure to run `npm install` for `gulp` and the following tasks to be
 * available from the command line. All tasks are run using `gulp taskName`.
 ******************************************************************************/
var Promise = require('es6-promise').Promise
var fs = require('fs'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    pretty = require('prettysize');
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps');


var IONIC_DIR = "node_modules/ionic-angular/"


/******************************************************************************
 * watch
 * Build the app and watch for source file changes.
 ******************************************************************************/
gulp.task('watch', ['sass', 'copy.fonts', 'copy.html', 'copy.scripts'], function(done) {
  watch('www/app/**/*.scss', function(){
    gulp.start('sass');
  });
  watch('www/app/**/*.html', function(){
    gulp.start('copy.html');
  });
  return bundleTask(true);
});


/******************************************************************************
 * build
 * Build the app once, without watching for source file changes.
 ******************************************************************************/
gulp.task('build', ['sass', 'copy.fonts', 'copy.html', 'copy.scripts'], function(done) {
  return bundleTask(false, done);
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

  return gulp.src('app/theme/app.+(ios|md).scss')
    .pipe(sass({
      includePaths: [
        IONIC_DIR,
        'node_modules/ionicons/dist/scss'
      ]
    }))
    .on('error', function(err){
      console.error(err.message);
      this.emit('end');
    })
    .pipe(autoprefixer(autoprefixerOpts))
    .pipe(gulp.dest('www/build/css'))
});


/******************************************************************************
 * copy.fonts
 * Copy Ionic font files to build directory.
 ******************************************************************************/
gulp.task('copy.fonts', function() {
  return gulp.src(IONIC_DIR + 'fonts/**/*.+(ttf|woff|woff2)')
    .pipe(gulp.dest('www/build/fonts'));
});


/******************************************************************************
 * copy.html
 * Copy html files to build directory.
 ******************************************************************************/
gulp.task('copy.html', function(){
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('www/build'));
});

/******************************************************************************
 * copy.scripts
 * Copy scripts to build directory
 ******************************************************************************/
gulp.task('copy.scripts', function(){
  return gulp.src('node_modules/angular2/bundles/angular2-polyfills.min.js')
    .pipe(gulp.dest('www/build/js'));
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
 * Bundle
 * Transpile source files and bundle them into build directory using browserify
 * and tsify.
 ******************************************************************************/
 function bundleTask(watch) {
     var b = browserify(
       ['./app/app.ts', './typings/main.d.ts'],
       {
           cache: {},
           packageCache: {},
           debug: true //set to false to disable sourcemaps
       }
     )
     .plugin(tsify, { noImplicitAny: false });
     

   if (watch) {
     b = watchify(b);
     b.on('update', bundle);
     b.on('log', function(log){
       console.log((log = log.split(' '), log[0] = pretty(log[0]), log.join(' ')));
     });
   }

   return bundle();

   function bundle() {
     return b.bundle()
       .on('error', function(err){ console.error(err.toString()); })
       //.pipe(fs.createWriteStream('www/build/js/app.bundle.js'));
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./', {
          includeContent: true,
          sourceRoot: '../../../'}))
      .pipe(gulp.dest('./www/build/js'));
    }
 }

