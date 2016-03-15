var gulp = require('gulp');
    gulpWatch = require('gulp-watch'),
    del = require('del');

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 */
var buildWebpack = require('ionic-gulp-webpack-build');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');

gulp.task('watch', ['sass', 'html', 'fonts'], function(){
  gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
  gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
  return buildWebpack({ watch: true });
});
gulp.task('build', ['sass', 'html', 'fonts'], buildWebpack);
gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('clean', function(done){
  del('www/build', done);
});