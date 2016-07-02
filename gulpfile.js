var gulp = require('gulp'),
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    jsdoc = require('gulp-jsdoc3');

var src = ['./src/*.js'];

gulp.task("build", function() {
	return gulp.src(src)
        .pipe(browserify())
		.pipe(concat('anglejs.min.js'))
	    .pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

gulp.task('docs', function (cb) {
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(require('./jsdoc.json'), cb));
});

gulp.task("default", ['build']);