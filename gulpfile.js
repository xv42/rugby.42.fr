var gulp = require('gulp')
var sass = require('gulp-sass')
var serve = require('gulp-serve')

gulp.task('sass', function () {
	gulp.src('./styles/*.scss')
		.pipe(sass({
			outputStyle: 'compressed',
			outFile: 'style.css'
		}))
		.pipe(gulp.dest('./styles'))
})

gulp.task('sass:watch', function () {
	gulp.watch('./styles/*.scss', ['sass'])
})

gulp.task('copyImages', function () {
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('./dist/images'))
})

gulp.task('build', ['sass', 'copyImages'], function () {
    gulp.src(['src/**/*.css', 'src/**/**.html'])
        .pipe(gulp.dest('./dist'))
})

gulp.task('serve-dev', serve('src'))
gulp.task('watch', ['sass:watch'])

gulp.task('dev', ['watch', 'serve-dev'])
gulp.task('default', ['build'])
