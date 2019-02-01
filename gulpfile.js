'use strict';
const babel = require('gulp-babel');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const bs = require('browser-sync').create();
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const maps = require('gulp-sourcemaps');
const metalsmith = require('./metalsmith');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

// CSS pipeline
gulp.task('css', () => {
  return gulp.src('./src/sass/main.scss')
  .pipe(maps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [
      './src/sass/base/*',
      './src/sass/components/*',
      './src/sass/layout/*',
      './src/sass/pages/*',
      './src/sass/utilities/*',
    ]
  }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./src/css'));
});

// JavaScript pipeline
// embed source map into doc via json data url using '{ debug: true }'
gulp.task('javascript', () => {
  return browserify('./src/js/main.js', { debug: true })
    .transform('babelify', { presets: ['es2015'] })
    .transform('uglifyify')
    .bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./src/js'));
});

// Metalsmith build task
gulp.task('build', (done) => {
  metalsmith((error) => {
    if (error) {
      gutil.log(error);
    } else {
      done();
    }
  });
});

// Build task, turns on BS server if not already on
gulp.task('build-helper', ['build'], (done) => {
  const bsFlag = (() => {
    let status = false;
    return (bool) => {
      if (bool) status = true;
      return status;
    };
  })();
  gulp.src(['./build/pages/**/*'])
  .pipe(gulp.dest('build'))
  .on('end', () => del([
    './build/pages/',
    './build/templates/'
  ])
  .then(() => {
    if (!bsFlag()) {
      bs.init({
        server: { baseDir: './build' },
        notify: false
      }, () => {
        bsFlag(true);
        done();
      });
    }
    if (bsFlag()) return bs.reload();
  }));
});

gulp.task('static-deploy', ['build'], (done) => {
  const bsFlag = (() => {
    let status = false;
    return (bool) => {
      if (bool) status = true;
      return status;
    };
  })();
  gulp.src(['./build/pages/**/*'])
  .pipe(gulp.dest('build'))
  .on('end', () => del([
    './build/pages/',
    './build/templates/'
  ]),
)});

// Standalone server
gulp.task('serve', (done) => {
  bs.init({
    server: { baseDir: './build' },
    notify: false
  }, () => done());
});

// Default task and watch tasks
gulp.task('default', ['build-helper'], () => {
  // Watch Sass
  gulp.watch(['src/sass/**/*'], ['css']);
  // Watch JavaScript
  gulp.watch(['src/js/main.js', 'src/js/lib/**/*.js'], ['javascript']);
  // Watch for Handlebars and/or HTML, build site
  gulp.watch([
    'src/**/*.{html, hbt, txt}',
    'src/templates/**/*.{hbt, html}',
    'src/css/**/*.{css, map}',
    'src/js/*.js',
    '!src/js/main.js',
    '!src/js/lib/**/*.js',
    'src/js/vendor/**/*js',
    'src/img/**/*'
  ], ['build-helper']);
});
