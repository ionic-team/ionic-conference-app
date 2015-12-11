/******************************************************************************
 * Gulpfile
 * Be sure to run `npm install` for `gulp` and the following tasks to be
 * available from the command line. All tasks are run using `gulp taskName`.
 ******************************************************************************/
var gulp = require('gulp');
var path = require('path');
var config = require('./ionic.config');


/******************************************************************************
 * gulp watch
 * Build the styles, and rebuild when source files change.
 ******************************************************************************/
gulp.task('watch', ['sass', 'fonts'], function(done) {
  var watch = require('gulp-watch');
  var sassFiles = path.join(config.paths.wwwDir, config.paths.appDir, config.paths.appSassWatch);
  watch(sassFiles, function(){
    gulp.start('sass');
  });
});


/******************************************************************************
 * gulp build
 * Build the styles once, without watching for source file changes.
 ******************************************************************************/
gulp.task('build', ['sass', 'fonts']);


/******************************************************************************
 * gulp sass
 * Convert Sass files to a single bundled CSS file. Uses auto-prefixer
 * to automatically add required vendor prefixes when needed.
 ******************************************************************************/
gulp.task('sass', function(){
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');

  var sassSrcFiles = [];
  config.paths.appSassSrc.forEach(function(sassSrc) {
    sassSrcFiles.push( path.join(config.paths.wwwDir, config.paths.appDir, sassSrc) );
  });

  gulp.src(sassSrcFiles)
    .pipe(sass({
      includePaths: [path.join(config.paths.ionicDir, config.paths.ionicSassDir)],
    }))
    .on('error', function(err){
      console.error(err.message);
      this.emit('end');
    })
    .pipe(autoprefixer(config.autoPrefixerOpts))
    .pipe(gulp.dest(
      path.join(config.paths.wwwDir, config.paths.buildDir, config.paths.buildCSSDir)
    ));
});


/******************************************************************************
 * gulp fonts
 * Copy Ionic font files to build directory.
 ******************************************************************************/
gulp.task('fonts', function() {
  return gulp.src(path.join(config.paths.ionicDir, config.paths.ionicFontFiles))
         .pipe(gulp.dest(path.join(config.paths.wwwDir, config.paths.buildDir, config.paths.buildFontsDir)));
});


/******************************************************************************
 * gulp clean
 * Delete previous build files.
 ******************************************************************************/
gulp.task('clean', function(done) {
  var del = require('del');
  del([config.paths.buildDir], done);
});
