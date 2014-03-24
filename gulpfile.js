var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache');

// Styles task
gulp.task('styles', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename('style.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts task
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean task
gulp.task('clean', function() {
    return gulp.src(['css', 'js'], {read: false})
        .pipe(clean());
});

// Watch task
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/scss/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['scripts']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});
