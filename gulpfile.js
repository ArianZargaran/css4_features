const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const del = require('del');
const connect = require('gulp-connect');

gulp.task('clean', function(cb) {
  del(['css'], cb);
});

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});
 
gulp.task('default', ['connect', 'watch']);