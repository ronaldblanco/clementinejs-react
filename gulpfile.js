var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var notify = require("gulp-notify");
//var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var jsxcs = require('gulp-jsxcs');
var jsValidate = require('gulp-jsvalidate');
var eslint = require('gulp-eslint');

var scriptsDir = './app/src';
var buildDir = './public';


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, fileOut, watch) {
  var props = {
    entries: [scriptsDir + '/' + file], 
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  };
  var bundler = watch ? watchify(props) : browserify(props);
  bundler.transform(reactify);
  function rebundle() {
    var stream = bundler.bundle(/*{debug: true}*/);
    return stream.on('error', handleErrors)
    .pipe(source(fileOut))
    .pipe(gulp.dest(buildDir + '/'));
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}

gulp.task('check-jsx', function () {
    return gulp.src('app/src/**/*.*')
        .pipe(jsxcs({
            disallowTrailingComma: true,
            validateQuoteMarks: {
                escape: true,
                mark: '\''
            }
        }));
});

gulp.task('check-js', function(){
    gulp.src('app/**/*.js')
        .pipe(jsValidate());
});

gulp.task('build', function() {
  //return buildScript('App.jsx', 'main.js', false);
  return buildScript('Main.jsx', 'main.js', false);
});

gulp.task('watch-dev', function() {
  nodemon({
    watch: ['app/**/*.js', 'app/src/*.*', 'app/src/components/*.*', 'gulpfile.js', 'server.js'],
    exec: "node server.js"
  });
});

gulp.task('watch-pro', function() {
  nodemon({
    watch: ['s.js'],
    exec: "node server.js"
  });
});

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src(['app/**/*.js','!node_modules/**', '!app/src/ajax-functions.js'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});

gulp.task('check', ['lint', 'check-jsx', 'check-js'], function() {});

gulp.task('development', ['check', 'build', 'watch-dev'], function() {});

gulp.task('production', ['build', 'watch-pro'], function() {});

gulp.task('default', ['build', 'watch-pro'], function() {});