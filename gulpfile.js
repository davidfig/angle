var gulp = require("gulp"),
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    documentation = require('gulp-documentation');

var files = [
			'*.js',
            '!gulpfile.js',
            '!*.min.js'
			];
var base = {base: '/'};

gulp.task("build", function() {
	return gulp.src(files, base)
		.pipe(concat('anglejs.min.js'))
	    .pipe(uglify())
		.pipe(gulp.dest(''));
});

gulp.task("doc", function() {
    return gulp.src(files, base)
        .pipe(documentation({ format: 'html', github: true }))
        .pipe(gulp.dest('docs'));
});

gulp.task("default", ['build']);