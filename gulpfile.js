var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');

var jade = require('jade');
var gulpJade = require('gulp-jade');
var katex = require('katex');

var webserver = require('gulp-webserver');

var templateCache = require('gulp-angular-templatecache');

jade.filters.katex = katex.renderToString;
jade.filters.shoutFilter = function (str) {
  return str + '!!!!';
}

gulp.task('sass', function() {
  gulp.src('stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('css'));
});

gulp.task('compress', function() {
  gulp.src([
    'vendor/jquery/dist/jquery.js',
    'vendor/bootstrap/dist/js/bootstrap.min.js',
    'vendor/jquery.easing/js/jquery.easing.min.js', 
    'vendor/mixitup/build/jquery.mixitup.min.js',
    'js/main.js',
    'src/app.js',
    'src/services/*.js',
    'src/controllers/*.js',
    'src/filters/*.js',
    'src/directives/*.js'
  ])
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('templates', function() {
  gulp.src('src/views/**/*.html')
    .pipe(templateCache({ root: 'views', module: 'MyApp' }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('jade', function () {
  return gulp.src('src/templates/**/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('src/views'))
})


gulp.task('watch', function() {
  gulp.watch('src/stylesheets/*.scss', ['sass']);
  gulp.watch('src/templates/**/*.jade', ['jade']);
  gulp.watch('src/views/**/*.html', ['templates']);
  gulp.watch(['src/**/*.js', '!dist/app.min.js', '!dist/templates.js'], ['compress']);
});

gulp.task('default', ['sass', 'jade', 'compress', 'templates', 'webserver', 'watch']);