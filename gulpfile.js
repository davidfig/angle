var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    documentation = require('gulp-documentation');

var src = [
        './angle.js'
    ];

gulp.task("build", function() {
	return gulp.src(src)
        .pipe(concat('angle.min.js'))
        .pipe(browserify())
	    .pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('docs', function () {
     return gulp.src(src)
        .pipe(documentation({ format: 'html', github: true }))
        .pipe(gulp.dest('./docs'));
});

gulp.task("default", ['build']);