import { join } from 'path';

const config: any = {
  gulp: require('gulp'),
  appDir: 'app',
  testDir: 'test',
  testDest: 'www/build/test',
  typingsDir: 'typings',
};

const imports: any = {
  gulp: require('gulp'),
  runSequence: require('run-sequence'),
  ionicGulpfile: require(join(process.cwd(), 'gulpfile.js')),
};

const gulp: any = imports.gulp;
const runSequence: any = imports.runSequence;

// just a hook into ionic's build
gulp.task('build-app', (done: Function) => {
  runSequence(
    'build',
    (<any>done)
  );
});

// compile E2E typescript into individual files, project directoy structure is replicated under www/build/test
gulp.task('build-e2e', ['clean-test'], () => {
  let typescript: any = require('gulp-typescript');
  let tsProject: any = typescript.createProject('tsconfig.json');
  let src: Array<any> = [
    join(config.typingsDir, '/browser.d.ts'),
    join(config.appDir, '**/*e2e.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(typescript(tsProject));

  return result.js
    .pipe(gulp.dest(config.testDest));
});

// delete everything used in our test cycle here
gulp.task('clean-test', () => {

  let del: any = require('del');

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([config.testDest]).then((paths: Array<any>) => {
    console.log('Deleted', paths && paths.join(', ') || '-');
  });
});

// run jasmine unit tests using karma with PhantomJS2 in single run mode
gulp.task('karma', (done: Function) => {

  let karma: any = require('karma');

  new (<any>karma).Server(
    {
      configFile: join(process.cwd(), config.testDir, 'karma.config.js'),
      singleRun: true,
    },
    (() => done())
  ).start();
});

// run jasmine unit tests using karma with Chrome, Karma will be left open in Chrome for debug
gulp.task('karma-debug', (done: Function) => {

  let karma: any = require('karma');

  new (<any>karma).Server(
    {
      configFile: join(process.cwd(), config.testDir, 'karma.config.js'),
      singleRun: false,
      browsers: ['Chrome'],
    },
    (() => done())
  ).start();
});

// run tslint against all typescript
gulp.task('lint', () => {

  let tslint: any = require('gulp-tslint');

  return gulp.src(join(config.appDir, '**/*.ts'))
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

// build unit tests, run unit tests, remap and report coverage
gulp.task('unit-test', (done: Function) => {
  runSequence(
    ['lint', 'html'],
    'karma',
    (<any>done)
  );
});
