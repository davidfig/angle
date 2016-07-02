var gulp = require('gulp'),
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    documentation = require('gulp-documentation'),
    jsdoc = require('gulp-jsdoc3');

var src = ['./src/*.js'];

gulp.task("build", function() {
	return gulp.src(src)
        .pipe(browserify())
		.pipe(concat('angle.min.js'))
	    .pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

// gulp.task('docs', function (cb) {
//     gulp.src(['README.md', './src/**/*.js'], {read: false})
//         .pipe(jsdoc(require('./jsdoc.json'), cb));
// });

gulp.task('docs', function () {
     gulp.src(src)
    .pipe(documentation({ format: 'html', github: true, lint: true }))
    .pipe(gulp.dest('./docs'));
});

gulp.task("default", ['build']);