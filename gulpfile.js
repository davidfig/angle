var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
    documentation = require('gulp-documentation');

var src = [
        './angle.js'
    ];

gulp.task("build", function() {
	return gulp.src(src)
	    .pipe(uglify())
        .pipe(browserify())
		.pipe(gulp.dest('./angle.min.js'));
});

gulp.task('docs', function () {
     return gulp.src(src)
        .pipe(documentation({ format: 'html', github: true }))
        .pipe(gulp.dest('./docs'));
});

gulp.task("default", ['build']);