var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var notify = require("gulp-notify");
//var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

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


gulp.task('build', function() {
  //return buildScript('App.jsx', 'main.js', false);
  return buildScript('Main.jsx', 'main.js', false);
});

gulp.task('watch', function() {
  nodemon({
    watch: ['app/**/*.js', 'app/src/App.jsx', 'app/src/Routes.jsx', 'app/src/components/*.*', 'gulpfile.js', 'server.js'],
    exec: "node server.js"
  });
});

gulp.task('default', ['build', 'watch'], function() {});