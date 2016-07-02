var gulp = require("gulp"),
    concat = require('gulp-concat');
	uglify = require('gulp-uglify');

var files = [
			'*.js',
            '!gulpfile.js',
            '!anglejs.min.js'
			];
var base = {base: '/'};

gulp.task("build", function() {
	return gulp.src(files, base)
		.pipe(concat('anglejs.min.js'))
	    .pipe(uglify())
		.pipe(gulp.dest(''));
});

gulp.task("default", ['build']);